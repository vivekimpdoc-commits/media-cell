import React, { useEffect, useState } from 'react';
import { Clock, CheckCircle, AlertOctagon, UserCheck } from 'lucide-react';

const Grievances = () => {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/grievances')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(console.error);
  }, []);

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      <div className="grid-4">
        <div className="glass-panel stat-card">
          <div className="stat-title">Avg Response Time</div>
          <div className="stat-value" style={{color: 'var(--success-green)'}}>4m 12s</div>
          <div className="stat-trend">Target: &lt; 5m</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">AI Auto-Routed</div>
          <div className="stat-value">94%</div>
          <div className="stat-trend trend-up">Increased efficiency</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">SLA Breaches</div>
          <div className="stat-value" style={{color: 'var(--alert-red)'}}>2</div>
          <div className="stat-trend">Needs immediate attention</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">KOL Interventions</div>
          <div className="stat-value" style={{color: 'var(--primary-accent)'}}>15</div>
          <div className="stat-trend">High impact resolved</div>
        </div>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title">Smart AI Ticketing Queue</h3>
          
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px', overflow: 'hidden' }}>
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
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.8rem',
                        background: t.status === 'Open' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: t.status === 'Open' ? 'var(--alert-red)' : 'var(--warning-yellow)'
                      }}>
                        {t.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} /> {t.sla}
                    </td>
                  </tr>
                ))}
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px', fontFamily: 'monospace' }}>#3</td>
                    <td style={{ padding: '12px' }}>X (Twitter)</td>
                    <td style={{ padding: '12px' }}>Harassment complaint reported by college student</td>
                    <td style={{ padding: '12px' }}>Women Helpline 1090</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--success-green)' }}>
                        Resolved
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--success-green)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle size={14} /> Met (3m)
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="section-title">KOL Impact Scoring</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            High-reach accounts prioritized for immediate reputation management.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: "Local News Anchor", handle: "@news_anchor_up", score: 98, followers: "1.2M", issue: "Query regarding bypass accident" },
              { name: "City Mayor", handle: "@mayor_official", score: 95, followers: "850K", issue: "Appreciating police response" },
              { name: "Social Activist", handle: "@activist_voice", score: 88, followers: "320K", issue: "Highlighting dark spots in sector 5" },
            ].map((kol, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderLeft: `3px solid ${kol.score > 90 ? 'var(--alert-red)' : 'var(--warning-yellow)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 'bold' }}>{kol.name} <span style={{fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'normal'}}>{kol.handle}</span></div>
                  <div style={{ background: 'var(--bg-dark)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', color: 'var(--primary-accent)', fontWeight: 'bold' }}>
                    Score: {kol.score}
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  <UserCheck size={14} style={{display: 'inline', verticalAlign: 'middle', marginRight: '4px'}}/>
                  Reach: {kol.followers}
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  AI Summary: {kol.issue}
                </div>
                <button style={{ marginTop: '10px', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>
                  Draft Priority Response
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievances;
