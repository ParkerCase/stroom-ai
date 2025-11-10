// Admin page for viewing project briefs
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Eye,
  ExternalLink,
} from 'lucide-react';

export default function AdminBriefs() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [briefs, setBriefs] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Check if already authenticated
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/briefs');
      if (response.ok) {
        const data = await response.json();
        setBriefs(data.briefs || []);
        setStats(data.stats || null);
        setAuthenticated(true);
      }
    } catch (error) {
      // Not authenticated
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthenticated(true);
        await checkAuth();
      } else {
        alert('Invalid password');
      }
    } catch (error) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch('/api/admin/briefs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (response.ok) {
        await checkAuth();
        if (selectedBrief?.id === id) {
          setSelectedBrief({ ...selectedBrief, status: newStatus });
        }
      }
    } catch (error) {
      alert('Failed to update status');
    }
  };

  const filteredBriefs = briefs.filter((brief) => {
    if (filter !== 'all' && brief.status !== filter) return false;
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        brief.name.toLowerCase().includes(search) ||
        brief.email.toLowerCase().includes(search) ||
        brief.company?.toLowerCase().includes(search) ||
        brief.projectDescription.toLowerCase().includes(search)
      );
    }
    return true;
  });

  if (!authenticated) {
    return (
      <>
        <Head>
          <title>Admin Login - StroomAI</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--canvas)',
            padding: '2rem',
          }}
        >
          <div
            style={{
              background: 'var(--canvas-card)',
              border: '1px solid var(--border-soft)',
              borderRadius: '16px',
              padding: '2.5rem',
              maxWidth: '400px',
              width: '100%',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--ink)',
              }}
            >
              Admin Login
            </h1>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--ink-muted)',
                marginBottom: '2rem',
              }}
            >
              Enter password to access admin dashboard
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid var(--border-soft)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  fontFamily: 'inherit',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  background: 'var(--accent-clay)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.6 : 1,
                }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - StroomAI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--canvas)',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: '600',
                  color: 'var(--ink)',
                  marginBottom: '0.5rem',
                }}
              >
                Project Briefs
              </h1>
              {stats && (
                <div
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    fontSize: '0.875rem',
                    color: 'var(--ink-muted)',
                  }}
                >
                  <span>Total: {stats.total}</span>
                  <span>Pending: {stats.pending}</span>
                  <span>Approved: {stats.approved}</span>
                  <span>Rejected: {stats.rejected}</span>
                </div>
              )}
            </div>
            <a
              href="/"
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--border-soft)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                textDecoration: 'none',
                color: 'var(--ink)',
              }}
            >
              ← Back to Site
            </a>
          </div>

          {/* Filters and Search */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--ink-muted)',
                }}
              />
              <input
                type="text"
                placeholder="Search by name, email, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 0.875rem 0.875rem 2.5rem',
                  border: '1px solid var(--border-soft)',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                padding: '0.875rem',
                border: '1px solid var(--border-soft)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontFamily: 'inherit',
                background: 'white',
              }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Briefs List */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: selectedBrief
                ? '1fr 400px'
                : '1fr',
              gap: '2rem',
            }}
          >
            <div>
              {filteredBriefs.length === 0 ? (
                <div
                  style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'var(--ink-muted)',
                  }}
                >
                  No briefs found
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {filteredBriefs.map((brief) => (
                    <div
                      key={brief.id}
                      onClick={() => setSelectedBrief(brief)}
                      style={{
                        background: 'var(--canvas-card)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow:
                          selectedBrief?.id === brief.id
                            ? 'var(--shadow-card)'
                            : 'none',
                        borderColor:
                          selectedBrief?.id === brief.id
                            ? 'var(--accent-clay)'
                            : 'var(--border-soft)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedBrief?.id !== brief.id) {
                          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedBrief?.id !== brief.id) {
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '1rem',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              color: 'var(--ink)',
                              marginBottom: '0.25rem',
                            }}
                          >
                            {brief.name}
                          </h3>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--ink-muted)',
                              marginBottom: '0.5rem',
                            }}
                          >
                            {brief.email} {brief.company && `• ${brief.company}`}
                          </p>
                          <p
                            style={{
                              fontSize: '0.9rem',
                              color: 'var(--ink)',
                              lineHeight: '1.6',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {brief.projectDescription}
                          </p>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '0.5rem',
                          }}
                        >
                          <span
                            style={{
                              padding: '0.25rem 0.75rem',
                              borderRadius: '20px',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              background:
                                brief.status === 'approved'
                                  ? 'rgba(16, 185, 129, 0.1)'
                                  : brief.status === 'rejected'
                                  ? 'rgba(239, 68, 68, 0.1)'
                                  : 'rgba(245, 158, 11, 0.1)',
                              color:
                                brief.status === 'approved'
                                  ? '#10b981'
                                  : brief.status === 'rejected'
                                  ? '#ef4444'
                                  : '#f59e0b',
                              textTransform: 'capitalize',
                            }}
                          >
                            {brief.status.replace('_', ' ')}
                          </span>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--ink-muted)',
                            }}
                          >
                            {new Date(brief.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--ink-muted)',
                        }}
                      >
                        <span>Complexity: {brief.claudeAnalysis.complexityScore}/10</span>
                        <span>•</span>
                        <span>
                          Est: ${brief.claudeAnalysis.totalEstimate.min.toLocaleString()} - $
                          {brief.claudeAnalysis.totalEstimate.max.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Brief Detail Sidebar */}
            {selectedBrief && (
              <div
                style={{
                  background: 'var(--canvas-card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: '16px',
                  padding: '2rem',
                  position: 'sticky',
                  top: '2rem',
                  maxHeight: 'calc(100vh - 4rem)',
                  overflowY: 'auto',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '2rem',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--ink)',
                    }}
                  >
                    Brief Details
                  </h2>
                  <button
                    onClick={() => setSelectedBrief(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--ink-muted)',
                      padding: '0.25rem',
                    }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.32em',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Client Information
                  </div>
                  <div style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Name:</strong> {selectedBrief.name}
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Email:</strong>{' '}
                      <a
                        href={`mailto:${selectedBrief.email}`}
                        style={{ color: 'var(--accent-clay)' }}
                      >
                        {selectedBrief.email}
                      </a>
                    </div>
                    {selectedBrief.company && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Company:</strong> {selectedBrief.company}
                      </div>
                    )}
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Submitted:</strong>{' '}
                      {new Date(selectedBrief.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.32em',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Project Description
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      whiteSpace: 'pre-wrap',
                      color: 'var(--ink)',
                    }}
                  >
                    {selectedBrief.projectDescription}
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(229, 115, 77, 0.05)',
                    border: '1px solid rgba(229, 115, 77, 0.2)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.32em',
                      color: 'var(--ink-muted)',
                      marginBottom: '1rem',
                    }}
                  >
                    Claude Analysis
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--ink-muted)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Complexity
                      </div>
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--accent-clay)',
                        }}
                      >
                        {selectedBrief.claudeAnalysis.complexityScore}/10
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--ink-muted)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Hours
                      </div>
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--ink)',
                        }}
                      >
                        {selectedBrief.claudeAnalysis.estimatedHours}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--ink-muted)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Estimate
                      </div>
                      <div
                        style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: 'var(--ink)',
                        }}
                      >
                        ${selectedBrief.claudeAnalysis.totalEstimate.min.toLocaleString()} - $
                        {selectedBrief.claudeAnalysis.totalEstimate.max.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--ink-muted)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Reasoning
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                        color: 'var(--ink)',
                      }}
                    >
                      {selectedBrief.claudeAnalysis.reasoning}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.32em',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Project Details
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: '1.8',
                      color: 'var(--ink)',
                    }}
                  >
                    <div>
                      <strong>Stage:</strong> {selectedBrief.stage}
                    </div>
                    <div>
                      <strong>Timeline:</strong> {selectedBrief.timeline}
                    </div>
                    <div>
                      <strong>Budget:</strong> {selectedBrief.budgetRange}
                    </div>
                    <div>
                      <strong>Engagement:</strong> {selectedBrief.engagementModel}
                    </div>
                    <div>
                      <strong>Deliverables:</strong>
                      <div
                        style={{
                          marginTop: '0.5rem',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {selectedBrief.expectedDeliverables}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-soft)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.32em',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Actions
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {selectedBrief.status !== 'approved' && (
                      <button
                        onClick={() => handleStatusUpdate(selectedBrief.id, 'approved')}
                        style={{
                          flex: 1,
                          padding: '0.75rem',
                          background: 'var(--accent-clay)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        Approve
                      </button>
                    )}
                    {selectedBrief.status !== 'rejected' && (
                      <button
                        onClick={() => handleStatusUpdate(selectedBrief.id, 'rejected')}
                        style={{
                          flex: 1,
                          padding: '0.75rem',
                          background: 'transparent',
                          color: 'var(--ink)',
                          border: '1px solid var(--border-soft)',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        Reject
                      </button>
                    )}
                  </div>
                  <a
                    href={`mailto:${selectedBrief.email}?subject=Re: Project Brief - StroomAI`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: 'transparent',
                      color: 'var(--accent-clay)',
                      border: '1px solid var(--accent-clay)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                    }}
                  >
                    <Mail size={16} />
                    Email Client
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

