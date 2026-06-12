import React from 'react';
import { Flag, Star, ShieldAlert, TrendingDown, TrendingUp } from 'lucide-react';

const MediaCredibility = () => {
  const handles = [
    { name: "@LocalNewsTimes", type: "X (Twitter) Handle", fakeCount: 14, score: 32, flag: "Red", trend: "down" },
    { name: "City Voice", type: "Facebook Page", fakeCount: 5, score: 68, flag: "Yellow", trend: "up" },
    { name: "Daily Bulletin (Web)", type: "News Portal", fakeCount: 1, score: 95, flag: "Green", trend: "up" },
    { name: "@CitizenReporter007", type: "X (Twitter) Handle", fakeCount: 22, score: 15, flag: "Red", trend: "down" },
  ];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid var(--warning-yellow)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ color: 'var(--warning-yellow)', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star /> Media Rating & Credibility Engine
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            AI-driven tracking of news portals and social media handles that repeatedly spread misinformation.
          </p>
        </div>
      </div>

      <div className="grid-3">
        <div className="glass-panel stat-card">
          <div className="stat-title">Red Flagged Handles</div>
          <div className="stat-value" style={{color: 'var(--alert-red)'}}>42</div>
          <div className="stat-trend trend-up">Action recommended against 5</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Yellow Flagged Handles</div>
          <div className="stat-value" style={{color: 'var(--warning-yellow)'}}>115</div>
          <div className="stat-trend">Under observation</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-title">Top Credible Source</div>
          <div className="stat-value" style={{fontSize: '1.2rem', marginTop: '10px', color: 'var(--success-green)'}}>Daily Bulletin (Web)</div>
          <div className="stat-trend">Score: 95/100</div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', flex: 1 }}>
        <h3 className="section-title">Habitual Offender Tracking List</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '12px' }}>Handle / Portal Name</th>
              <th style={{ padding: '12px' }}>Platform Type</th>
              <th style={{ padding: '12px' }}>Fake News Instances (YTD)</th>
              <th style={{ padding: '12px' }}>Credibility Score (0-100)</th>
              <th style={{ padding: '12px' }}>Flag Status</th>
              <th style={{ padding: '12px' }}>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {handles.map((h, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{h.name}</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{h.type}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>{h.fakeCount}</td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${h.score}%`, background: h.score > 80 ? 'var(--success-green)' : h.score > 40 ? 'var(--warning-yellow)' : 'var(--alert-red)' }}></div>
                    </div>
                    <span>{h.score}</span>
                  </div>
                </td>
                <td style={{ padding: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: h.flag === 'Red' ? 'var(--alert-red)' : h.flag === 'Yellow' ? 'var(--warning-yellow)' : 'var(--success-green)' }}>
                    <Flag size={14} fill={h.flag === 'Red' ? 'var(--alert-red)' : h.flag === 'Yellow' ? 'var(--warning-yellow)' : 'var(--success-green)'} />
                    {h.flag} Flag
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  {h.flag === 'Red' ? (
                    <button style={{ background: 'var(--alert-red)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <ShieldAlert size={14}/> Send Legal Notice
                    </button>
                  ) : h.flag === 'Yellow' ? (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Monitor</span>
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: 'var(--success-green)' }}>Safe Partner</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MediaCredibility;
