import React, { useState } from 'react';
import { AlertCircle, Clock, Search, MapPin, MessageSquareWarning, Zap, Send } from 'lucide-react';

const Grievances = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'resolved' | 'escalation'>('pending');

  const tickets = [
    { id: "1", platform: "X (Twitter)", issue: "Traffic jam near Sector 18. No police.", status: "Open", sla: "22m left" },
    { id: "2", platform: "Facebook", issue: "Loud speakers playing after 10 PM.", status: "In Progress", sla: "14m left" }
  ];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('pending')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'pending' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'pending' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <AlertCircle size={20} /> Action Required (12)
        </button>
        <button 
          onClick={() => setActiveTab('escalation')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'escalation' ? 'var(--alert-red)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'escalation' ? '2px solid var(--alert-red)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Zap size={20} /> Auto-Escalation Matrix
        </button>
      </div>

      {activeTab === 'pending' && (
        <div className="grid-2 fade-in" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div className="stat-trend">Target: &lt;5m</div>
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 className="section-title">Public Ticket Queue</h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px' }}>ID</th>
                  <th style={{ padding: '12px' }}>Source</th>
                  <th style={{ padding: '12px' }}>Issue (AI Summary)</th>
                  <th style={{ padding: '12px' }}>Routed To</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>SLA Timer</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px', fontFamily: 'monospace' }}>#{t.id}</td>
                    <td style={{ padding: '12px' }}>{t.platform}</td>
                    <td style={{ padding: '12px' }}>{t.issue}</td>
                    <td style={{ padding: '12px' }}>Traffic PCR</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ 
                        padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem',
                        background: t.status === 'Open' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: t.status === 'Open' ? 'var(--alert-red)' : 'var(--warning-yellow)'
                      }}>{t.status}</span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} /> {t.sla}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'escalation' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, color: 'var(--alert-red)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap /> Automated Escalation Matrix
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            System automatically alerts SP/SSP via SMS if high-priority incidents (e.g. Women Harassment, Riots) are not responded to within the Golden Hour.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '12px' }}>Incident Type</th>
                <th style={{ padding: '12px' }}>T+0 Trigger</th>
                <th style={{ padding: '12px' }}>T+15m Escalation</th>
                <th style={{ padding: '12px' }}>T+30m Escalation</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Women Harassment</td>
                <td style={{ padding: '12px' }}>SHO / 1090 Desk</td>
                <td style={{ padding: '12px' }}>Circle Officer (CO)</td>
                <td style={{ padding: '12px', color: 'var(--alert-red)' }}>SP/SSP (Auto-SMS)</td>
                <td style={{ padding: '12px' }}><span style={{ color: 'var(--success-green)' }}>Active</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Communal Violence</td>
                <td style={{ padding: '12px' }}>Control Room</td>
                <td style={{ padding: '12px' }}>SP/SSP</td>
                <td style={{ padding: '12px', color: 'var(--alert-red)' }}>IG / ADG Zone</td>
                <td style={{ padding: '12px' }}><span style={{ color: 'var(--success-green)' }}>Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default Grievances;
