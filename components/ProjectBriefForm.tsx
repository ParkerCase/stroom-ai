'use client';

import { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

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

export default function ProjectBriefForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      const response = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

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
        setError('Your submission was flagged. Please ensure all fields are filled out properly and try again.');
        setIsSubmitting(false);
        return;
      }

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

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>Brief Received</h4>
        <p style={{ color: 'var(--ink-muted)', marginBottom: '1rem' }}>
          I&apos;ll review your project and send a detailed proposal within 48 hours.
        </p>
        <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
          Check your email ({formData.email}) for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Step 1: Contact Info */}
      {currentStep === 1 && (
        <div>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--ink)', fontWeight: 600 }}>Contact Information</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="John Smith"
                className="contact-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="john@company.com"
                className="contact-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                placeholder="Optional"
                className="contact-input"
              />
            </div>

            <button type="button" onClick={() => setCurrentStep(2)} className="cta-button cta-button--primary" style={{ marginTop: '0.5rem' }}>
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Project Details */}
      {currentStep === 2 && (
        <div>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--ink)', fontWeight: 600 }}>Project Details</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Project Description * (Be specific)</label>
              <textarea
                required
                rows={4}
                value={formData.projectDescription}
                onChange={(e) => updateField('projectDescription', e.target.value)}
                placeholder="Describe what you're trying to build, the problem you're solving, and any technical requirements..."
                minLength={100}
                className="contact-input"
              />
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', marginTop: '0.25rem', display: 'block' }}>
                {formData.projectDescription.length} / 100 min
              </span>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Project Stage *</label>
              <select
                required
                value={formData.stage}
                onChange={(e) => updateField('stage', e.target.value)}
                className="contact-input"
              >
                <option value="">Select stage...</option>
                <option value="idea">Idea / Concept</option>
                <option value="prototype">Prototype / MVP</option>
                <option value="production">Production / Scaling</option>
                <option value="research">Research / Exploration</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Timeline *</label>
              <select
                required
                value={formData.timeline}
                onChange={(e) => updateField('timeline', e.target.value)}
                className="contact-input"
              >
                <option value="">Select timeline...</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="short">Short (1-2 months)</option>
                <option value="medium">Medium (3-6 months)</option>
                <option value="long">Long-term (6+ months)</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button type="button" onClick={() => setCurrentStep(1)} className="cta-button cta-button--outline" style={{ flex: 1 }}>
                ← Back
              </button>
              <button type="button" onClick={() => setCurrentStep(3)} className="cta-button cta-button--primary" style={{ flex: 1 }}>
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Technical Details */}
      {currentStep === 3 && (
        <div>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--ink)', fontWeight: 600 }}>Technical Scope</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Data Availability *</label>
              <select
                required
                value={formData.dataAvailability}
                onChange={(e) => updateField('dataAvailability', e.target.value)}
                className="contact-input"
              >
                <option value="">Select option...</option>
                <option value="have-data">We have existing data</option>
                <option value="need-data">We need to collect/source data</option>
                <option value="no-data">No data needed for this project</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Expected Deliverables *</label>
              <textarea
                required
                rows={3}
                value={formData.expectedDeliverables}
                onChange={(e) => updateField('expectedDeliverables', e.target.value)}
                placeholder="e.g., Working prototype, API integration, research report, trained model..."
                className="contact-input"
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button type="button" onClick={() => setCurrentStep(2)} className="cta-button cta-button--outline" style={{ flex: 1 }}>
                ← Back
              </button>
              <button type="button" onClick={() => setCurrentStep(4)} className="cta-button cta-button--primary" style={{ flex: 1 }}>
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Pricing Model */}
      {currentStep === 4 && (
        <div>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--ink)', fontWeight: 600 }}>Engagement Model</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Preferred Engagement Model *</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-soft)', borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <input
                    type="radio"
                    name="engagementModel"
                    value="hourly"
                    checked={formData.engagementModel === 'hourly'}
                    onChange={(e) => updateField('engagementModel', e.target.value)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '0.25rem' }}>Hourly Only ($150-250/hr)</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>Best for: Clear scope, established budgets</p>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', border: '2px solid var(--accent-clay)', borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: 'rgba(229, 115, 77, 0.05)' }}>
                  <input
                    type="radio"
                    name="engagementModel"
                    value="commission-hourly"
                    checked={formData.engagementModel === 'commission-hourly'}
                    onChange={(e) => updateField('engagementModel', e.target.value)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '0.25rem' }}>Commission + Hourly ($100-150/hr + 2-5%)</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>Best for: Growth-stage companies ⭐ Most Popular</p>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-soft)', borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <input
                    type="radio"
                    name="engagementModel"
                    value="equity-commission"
                    checked={formData.engagementModel === 'equity-commission'}
                    onChange={(e) => updateField('engagementModel', e.target.value)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '0.25rem' }}>Equity + Commission ($50-75/hr + 5-15% equity)</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', margin: 0 }}>Best for: Early-stage startups</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500 }}>Budget Range *</label>
              <select
                required
                value={formData.budgetRange}
                onChange={(e) => updateField('budgetRange', e.target.value)}
                className="contact-input"
              >
                <option value="">Select budget range...</option>
                <option value="under-5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.5rem', color: '#dc2626' }}>
                <AlertCircle size={16} />
                <span style={{ fontSize: '0.9rem' }}>{error}</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button type="button" onClick={() => setCurrentStep(3)} className="cta-button cta-button--outline" style={{ flex: 1 }}>
                ← Back
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting || !formData.engagementModel}
                className="cta-button cta-button--primary" 
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Brief
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

