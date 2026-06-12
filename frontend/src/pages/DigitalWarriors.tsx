import React from 'react';
import { Users, Smartphone, MessageSquare, ShieldCheck, CheckCircle, AlertTriangle } from 'lucide-react';

const DigitalWarriors = () => {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      <div className="grid-3">
        <div className="glass-panel stat-card">
          <div className="stat-title">Active Digital Warriors</div>
          <div className="stat-value" style={{color: 'var(--primary-accent)'}}>4,250</div>
          <div className="stat-trend trend-up">Across 75 districts</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Rumors Reported Today</div>
          <div className="stat-value">34</div>
          <div className="stat-trend trend-down">12 verified & debunked</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Top Contributing Zone</div>
          <div className="stat-value" style={{fontSize: '1.5rem', marginTop: '10px'}}>Kanpur Zone</div>
          <div className="stat-trend">18 active reports</div>
        </div>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Live Volunteer Feed */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{margin: 0}}>
              <Smartphone style={{marginRight: '8px'}} /> WhatsApp Volunteer Reports
            </h3>
            <button style={{ background: 'transparent', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
              Broadcast Message to All
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '12px' }}>Reporter</th>
                <th style={{ padding: '12px' }}>Zone</th>
                <th style={{ padding: '12px' }}>Intel Type</th>
                <th style={{ padding: '12px' }}>Content Snippet</th>
                <th style={{ padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Suresh P.", zone: "Lucknow", type: "Communal Tension", content: "A video of a fight is being shared as communal...", status: "Pending" },
                { name: "Amit K.", zone: "Kanpur", type: "Traffic/Accident", content: "Highway blocked by protestors near toll plaza.", status: "Verified" },
                { name: "Riya S.", zone: "Varanasi", type: "Fake Job Offer", content: "Police recruitment fake form circulating.", status: "Verified" }
              ].map((report, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                    <ShieldCheck size={16} color="var(--success-green)"/> {report.name}
                  </td>
                  <td style={{ padding: '12px' }}>{report.zone}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ 
                      color: report.type === 'Communal Tension' ? 'var(--alert-red)' : 'var(--warning-yellow)',
                      fontSize: '0.85rem'
                    }}>{report.type}</span>
                  </td>
                  <td style={{ padding: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>"{report.content}"</td>
                  <td style={{ padding: '12px' }}>
                    {report.status === 'Verified' ? (
                      <span style={{ color: 'var(--success-green)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={14}/> Handled</span>
                    ) : (
                      <button style={{ background: 'var(--alert-red)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Verify</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Network Health & Outreach */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="section-title">
            <Users style={{marginRight: '8px'}} /> Network Management
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Manage the digital warriors joining from local communities.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--primary-accent)' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>New Applications</div>
              <div style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>145</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Pending background check</div>
              <button style={{ width: '100%', marginTop: '10px', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>Review Apps</button>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--alert-red)' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px', color: 'var(--alert-red)' }}><AlertTriangle size={14} style={{display:'inline'}}/> Inactive Nodes</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>12 Groups show no activity for 30 days.</div>
              <button style={{ width: '100%', marginTop: '10px', background: 'transparent', border: '1px solid var(--alert-red)', color: 'var(--alert-red)', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>Send Engagement Ping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWarriors;
