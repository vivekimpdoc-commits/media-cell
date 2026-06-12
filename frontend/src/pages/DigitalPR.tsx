import React, { useState } from 'react';
import { Send, Bot, CheckCircle, RefreshCw, Smartphone, FileText, Download, Eye } from 'lucide-react';

const DigitalPR = () => {
  const [topic, setTopic] = useState('');
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);
  const [platforms, setPlatforms] = useState({ x: true, fb: true, insta: false, wa: true });
  const [activeTab, setActiveTab] = useState<'generator' | 'manager'>('generator');

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/pr/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setTimeout(() => {
        setDraft(data.draft);
        setLoading(false);
      }, 800); // Simulate AI delay
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const pastPressReleases = [
    { id: "PR-2026-042", title: "Clarification on Sector 4 Incident", date: "June 11, 2026", status: "Published", platforms: ["X", "FB", "WA"] },
    { id: "PR-2026-041", title: "Traffic Advisory for VIP Movement", date: "June 09, 2026", status: "Published", platforms: ["X", "FB", "Insta"] },
    { id: "PR-2026-040", title: "Arrest of Cyber Fraud Gang", date: "June 05, 2026", status: "Published", platforms: ["X", "FB", "WA", "Insta"] },
    { id: "PR-2026-039", title: "New Helpline Number Launch", date: "June 01, 2026", status: "Archived", platforms: ["FB", "WA"] }
  ];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('generator')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'generator' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'generator' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Bot size={20} /> AI PR Generator
        </button>
        <button 
          onClick={() => setActiveTab('manager')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'manager' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'manager' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <FileText size={20} /> Press Release Manager
        </button>
      </div>

      {activeTab === 'generator' && (
        <>
          <div className="grid-2 fade-in">
            {/* Gen AI Drafting Tool */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 className="section-title" style={{margin: 0}}>Smart Press-Release Generator</h3>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--primary-accent)', padding: '4px 10px', borderRadius: '12px' }}>
                  <Bot size={14} /> Gen-AI Active
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Incident Topic / Facts</label>
                <textarea 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Minor scuffle at local market in Sector 4. Situation under control. No serious injuries. Requesting public to ignore rumors..."
                  style={{ width: '100%', height: '100px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px', color: 'var(--text-primary)', resize: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading || !topic}
                style={{ width: '100%', background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: (loading || !topic) ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: (loading || !topic) ? 0.6 : 1 }}
              >
                {loading ? <RefreshCw className="spin" size={18} /> : <Bot size={18} />}
                {loading ? 'Generating Draft...' : 'Generate Official Draft'}
              </button>

              {draft && (
                <div className="fade-in" style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated Draft (Ready for Review)</span>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--primary-accent)', cursor: 'pointer', fontSize: '0.85rem' }}>Edit manually</button>
                  </div>
                  <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{draft}</p>
                </div>
              )}
            </div>

            {/* Multi-platform Publishing */}
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
               <h3 className="section-title">Multi-Platform Publishing</h3>
               <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Select official channels to broadcast the verified message simultaneously.</p>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                 {[
                   { id: 'x', name: 'X (Official)', color: '#1DA1F2' },
                   { id: 'fb', name: 'Facebook Page', color: '#4267B2' },
                   { id: 'insta', name: 'Instagram Story', color: '#E1306C' },
                   { id: 'wa', name: 'WhatsApp Channels', color: '#25D366' },
                 ].map((plat) => (
                   <div 
                     key={plat.id}
                     onClick={() => setPlatforms(p => ({ ...p, [plat.id]: !p[plat.id as keyof typeof platforms] }))}
                     style={{ 
                       display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', 
                       background: platforms[plat.id as keyof typeof platforms] ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)', 
                       border: `1px solid ${platforms[plat.id as keyof typeof platforms] ? plat.color : 'var(--border-color)'}`,
                       borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s'
                     }}
                   >
                     <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `1px solid ${plat.color}`, background: platforms[plat.id as keyof typeof platforms] ? plat.color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {platforms[plat.id as keyof typeof platforms] && <CheckCircle size={12} color="white" />}
                     </div>
                     <span style={{ fontWeight: '500' }}>{plat.name}</span>
                   </div>
                 ))}
               </div>

               <div style={{ marginTop: 'auto' }}>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      disabled={!draft}
                      style={{ flex: 1, background: 'var(--success-green)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: !draft ? 'not-allowed' : 'pointer', opacity: !draft ? 0.5 : 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                      <Send size={18} /> Publish Now
                    </button>
                    <button 
                      disabled={!draft}
                      style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '12px', borderRadius: '8px', cursor: !draft ? 'not-allowed' : 'pointer', opacity: !draft ? 0.5 : 1 }}
                    >
                      Schedule for later
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'manager' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{margin: 0}}>Official Press Releases Record</h3>
            <button style={{ background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
              Export to PDF
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '12px' }}>PR ID</th>
                <th style={{ padding: '12px' }}>Title/Subject</th>
                <th style={{ padding: '12px' }}>Date Issued</th>
                <th style={{ padding: '12px' }}>Platforms</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pastPressReleases.map((pr, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', color: 'var(--primary-accent)' }}>{pr.id}</td>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{pr.title}</td>
                  <td style={{ padding: '12px' }}>{pr.date}</td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      {pr.platforms.map(p => (
                        <span key={p} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{p}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ color: pr.status === 'Published' ? 'var(--success-green)' : 'var(--text-secondary)' }}>
                      {pr.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', display: 'flex', gap: '10px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--primary-accent)', cursor: 'pointer' }} title="View"><Eye size={18} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }} title="Download PDF"><Download size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Fact Check Corner preview (always visible or move to a separate section?) - keeping it at bottom */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginTop: 'auto' }}>
        <h3 className="section-title">Crisis Communication: Live Fact-Check Counter</h3>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ flex: 1, background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid var(--alert-red)', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ color: 'var(--alert-red)', marginBottom: '5px' }}>Rumor Detected</h4>
            <p style={{ fontSize: '0.9rem' }}>"Gunshots heard near City Mall during protest." (Viral on WhatsApp)</p>
          </div>
          <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--success-green)', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ color: 'var(--success-green)', marginBottom: '5px' }}>Official Fact Check</h4>
            <p style={{ fontSize: '0.9rem' }}>FALSE. Sound was from a burst tire of a heavy vehicle. No firing occurred. Police on site. <a href="#" style={{ color: 'var(--primary-accent)' }}>View Evidence Video</a></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DigitalPR;
