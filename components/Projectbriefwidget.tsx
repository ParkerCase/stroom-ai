'use client';

import { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Send, AlertCircle } from 'lucide-react';

interface ProjectBriefData {
  name: string;
  email: string;
  company: string;
  projectDescription: string;
  timeline: string;
  stage: string;
  budgetRange: string;
  dataAvailability: string;
  engagementModel: string;
  expectedDeliverables: string;
}

export default function ProjectBriefWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const widgetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  const [formData, setFormData] = useState<ProjectBriefData>({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    timeline: '',
    stage: '',
    budgetRange: '',
    dataAvailability: '',
    engagementModel: '',
    expectedDeliverables: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

      const response = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned an error. Please try again.');
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      if (result.spam) {
        // Show error for spam instead of silently closing
        setError('Your submission was flagged. Please ensure all fields are filled out properly and try again.');
        setIsSubmitting(false);
        return;
      }

      // Success - show success message
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error('Form submission error:', err);
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          setError('Request timed out. Please try again.');
        } else {
          setError(err.message || 'Something went wrong. Please try again.');
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof ProjectBriefData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle keyboard navigation (Escape to close)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus the close button when dialog opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Prevent body scroll when widget is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (submitted) {
    return (
      <div className="widget-container">
        <button
          className="widget-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close project brief form" : "Open project brief form"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <MessageSquare size={24} aria-hidden="true" />
        </button>

        {isOpen && (
          <div 
            className="widget-panel success"
            role="dialog"
            aria-labelledby="success-title"
            aria-modal="true"
          >
            <div className="widget-header">
              <h3>Thank You!</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="close-btn"
                aria-label="Close dialog"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="widget-body">
              <div className="success-message">
                <div className="success-icon" aria-hidden="true">✓</div>
                <h4 id="success-title">Brief Received</h4>
                <p>
                  I&apos;ll review your project and send a detailed proposal within 48 hours.
                </p>
                <p className="email-note">
                  Check your email ({formData.email}) for confirmation.
                </p>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .success-message {
            text-align: center;
            padding: 2rem;
          }
          .success-icon {
            width: 60px;
            height: 60px;
            background: #10b981;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin: 0 auto 1rem;
          }
          .success-message h4 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
          .email-note {
            font-size: 0.875rem;
            color: #666;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="widget-container" ref={widgetRef}>
        <button
          className="widget-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close project brief form" : "Open project brief form"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <MessageSquare size={24} aria-hidden="true" />
        </button>

        {isOpen && (
          <div 
            className="widget-panel"
            role="dialog"
            aria-labelledby="widget-title"
            aria-modal="true"
          >
            <div className="widget-header">
              <div>
                <h3 id="widget-title">Project Brief</h3>
                <p className="widget-subtitle">Skip the meeting - get a proposal in 48 hours</p>
              </div>
              <button 
                ref={closeButtonRef}
                onClick={() => setIsOpen(false)} 
                className="close-btn"
                aria-label="Close dialog"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="widget-body">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h4>Contact Information</h4>
                  
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      placeholder="Optional"
                    />
                  </div>

                  <button type="button" onClick={() => setCurrentStep(2)} className="next-btn">
                    Next →
                  </button>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h4>Project Details</h4>
                  
                  <div className="form-group">
                    <label>Project Description * (Be specific)</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => updateField('projectDescription', e.target.value)}
                      placeholder="Describe what you're trying to build, the problem you're solving, and any technical requirements..."
                      minLength={100}
                    />
                    <span className="char-count">{formData.projectDescription.length} / 100 min</span>
                  </div>

                  <div className="form-group">
                    <label>Project Stage *</label>
                    <select
                      required
                      value={formData.stage}
                      onChange={(e) => updateField('stage', e.target.value)}
                    >
                      <option value="">Select stage...</option>
                      <option value="idea">Idea / Concept</option>
                      <option value="prototype">Prototype / MVP</option>
                      <option value="production">Production / Scaling</option>
                      <option value="research">Research / Exploration</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Timeline *</label>
                    <select
                      required
                      value={formData.timeline}
                      onChange={(e) => updateField('timeline', e.target.value)}
                    >
                      <option value="">Select timeline...</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="short">Short (1-2 months)</option>
                      <option value="medium">Medium (3-6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                    </select>
                  </div>

                  <div className="form-nav">
                    <button type="button" onClick={() => setCurrentStep(1)} className="back-btn">
                      ← Back
                    </button>
                    <button type="button" onClick={() => setCurrentStep(3)} className="next-btn">
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Technical Details */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h4>Technical Scope</h4>
                  
                  <div className="form-group">
                    <label>Data Availability *</label>
                    <select
                      required
                      value={formData.dataAvailability}
                      onChange={(e) => updateField('dataAvailability', e.target.value)}
                    >
                      <option value="">Select option...</option>
                      <option value="have-data">We have existing data</option>
                      <option value="need-data">We need to collect/source data</option>
                      <option value="no-data">No data needed for this project</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Expected Deliverables *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.expectedDeliverables}
                      onChange={(e) => updateField('expectedDeliverables', e.target.value)}
                      placeholder="e.g., Working prototype, API integration, research report, trained model..."
                    />
                  </div>

                  <div className="form-nav">
                    <button type="button" onClick={() => setCurrentStep(2)} className="back-btn">
                      ← Back
                    </button>
                    <button type="button" onClick={() => setCurrentStep(4)} className="next-btn">
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Pricing Model */}
              {currentStep === 4 && (
                <div className="form-step">
                  <h4>Engagement Model</h4>
                  
                  <div className="form-group">
                    <label>Preferred Engagement Model *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="engagementModel"
                          value="hourly"
                          checked={formData.engagementModel === 'hourly'}
                          onChange={(e) => updateField('engagementModel', e.target.value)}
                        />
                        <div>
                          <strong>Hourly Only ($150-250/hr)</strong>
                          <p>Best for: Clear scope, established budgets</p>
                        </div>
                      </label>

                      <label className="radio-option recommended">
                        <input
                          type="radio"
                          name="engagementModel"
                          value="commission-hourly"
                          checked={formData.engagementModel === 'commission-hourly'}
                          onChange={(e) => updateField('engagementModel', e.target.value)}
                        />
                        <div>
                          <strong>Commission + Hourly ($100-150/hr + 2-5%)</strong>
                          <p>Best for: Growth-stage companies ⭐ Most Popular</p>
                        </div>
                      </label>

                      <label className="radio-option">
                        <input
                          type="radio"
                          name="engagementModel"
                          value="equity-commission"
                          checked={formData.engagementModel === 'equity-commission'}
                          onChange={(e) => updateField('engagementModel', e.target.value)}
                        />
                        <div>
                          <strong>Equity + Commission ($50-75/hr + 5-15% equity)</strong>
                          <p>Best for: Early-stage startups</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Budget Range *</label>
                    <select
                      required
                      value={formData.budgetRange}
                      onChange={(e) => updateField('budgetRange', e.target.value)}
                    >
                      <option value="">Select budget range...</option>
                      <option value="under-5k">Less than $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-20k">$10,000 - $20,000</option>
                      <option value="20k-50k">$20,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="flexible">Flexible / Depends on scope</option>
                    </select>
                  </div>

                  {error && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <div className="form-nav">
                    <button type="button" onClick={() => setCurrentStep(3)} className="back-btn">
                      ← Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="submit-btn">
                      {isSubmitting ? 'Submitting...' : 'Submit Brief'}
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step Indicator */}
              <div className="step-indicator">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`step-dot ${currentStep >= step ? 'active' : ''}`}
                  />
                ))}
              </div>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .widget-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          pointer-events: none;
        }

        .widget-container > * {
          pointer-events: auto;
        }

        .widget-trigger {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #2c3e50;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .widget-trigger:hover {
          background: #1a252f;
          transform: scale(1.05);
        }

        .widget-panel {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 450px;
          max-height: 600px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .widget-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .widget-header h3 {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0;
          color: #2c3e50;
        }

        .widget-subtitle {
          font-size: 0.875rem;
          color: #2c3e50;
          margin: 0.25rem 0 0 0;
        }

        .close-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 0.25rem;
        }

        .close-btn:hover {
          color: #2c3e50;
        }

        .widget-body {
          padding: 1.5rem;
          overflow-y: auto;
          max-height: 450px;
        }

        .form-step {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .form-step h4 {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-size: 0.875rem;
          font-family: inherit;
          transition: border-color 0.2s;
          color: #2c3e50;
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }
        
        .form-group select {
          color: #2c3e50;
        }
        
        .form-group select option {
          color: #2c3e50;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2c3e50;
        }

        .char-count {
          display: block;
          text-align: right;
          font-size: 0.75rem;
          color: #2c3e50;
          margin-top: 0.25rem;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .radio-option {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .radio-option:hover {
          border-color: #2c3e50;
        }

        .radio-option.recommended {
          border-color: #2c3e50;
          background: #f8f9fa;
        }

        .radio-option input[type="radio"] {
          margin-top: 0.25rem;
          width: auto;
        }

        .radio-option strong {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
        }

        .radio-option p {
          margin: 0;
          font-size: 0.75rem;
          color: #666;
        }

        .form-nav {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .back-btn,
        .next-btn,
        .submit-btn {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .back-btn {
          background: white;
          color: #2c3e50;
          border: 1px solid #e0e0e0;
        }

        .back-btn:hover {
          background: #f8f9fa;
        }

        .next-btn,
        .submit-btn {
          background: #2c3e50;
          color: white;
        }

        .next-btn:hover,
        .submit-btn:hover:not(:disabled) {
          background: #1a252f;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .step-indicator {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e0e0e0;
          transition: background 0.3s;
        }

        .step-dot.active {
          background: #2c3e50;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #fee;
          border: 1px solid #fcc;
          border-radius: 6px;
          color: #c33;
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .widget-container {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
          }

          .widget-trigger {
            position: absolute;
            right: 0;
            bottom: 0;
          }

          .widget-panel {
            width: 100%;
            max-width: 100%;
            right: 0;
            left: 0;
            bottom: 80px;
            max-height: calc(100vh - 100px);
          }
        }
      `}</style>
    </>
  );
}