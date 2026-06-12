import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Search, Activity, FileWarning, BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SocialIntel = () => {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'fakenews' | 'sentiment'>('monitoring');

  // Mock sentiment data for the detailed sentiment analysis tab
  const sentimentHistory = [
    { day: 'Mon', positive: 4000, negative: 2400, neutral: 2400 },
    { day: 'Tue', positive: 3000, negative: 1398, neutral: 2210 },
    { day: 'Wed', positive: 2000, negative: 9800, neutral: 2290 },
    { day: 'Thu', positive: 2780, negative: 3908, neutral: 2000 },
    { day: 'Fri', positive: 1890, negative: 4800, neutral: 2181 },
    { day: 'Sat', positive: 2390, negative: 3800, neutral: 2500 },
    { day: 'Sun', positive: 3490, negative: 4300, neutral: 2100 },
  ];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('monitoring')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'monitoring' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'monitoring' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Activity size={20} /> Live Monitoring
        </button>
        <button 
          onClick={() => setActiveTab('sentiment')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'sentiment' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'sentiment' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <BarChart2 size={20} /> Detailed Sentiment
        </button>
        <button 
          onClick={() => setActiveTab('fakenews')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'fakenews' ? 'var(--alert-red)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'fakenews' ? '2px solid var(--alert-red)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <FileWarning size={20} /> Fake News Tracker
        </button>
      </div>

      {activeTab === 'monitoring' && (
        <div className="fade-in">
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            <div className="glass-panel stat-card">
              <div className="stat-title">Platform Monitored</div>
              <div className="stat-value" style={{fontSize: '1.5rem', marginTop: '10px'}}>
                <span style={{color: '#1DA1F2', marginRight: '10px'}}>X (Twitter)</span>
                <span style={{color: '#4267B2', marginRight: '10px'}}>Facebook</span>
                <span style={{color: '#E1306C'}}>Instagram</span>
              </div>
            </div>
            <div className="glass-panel stat-card">
              <div className="stat-title">Deepfake / Bot Alerts</div>
              <div className="stat-value" style={{color: 'var(--alert-red)'}}>24 Detected</div>
              <div className="stat-trend trend-up">AI Confidence: 94%</div>
            </div>
            <div className="glass-panel stat-card">
              <div className="stat-title">Dark Web Mentions</div>
              <div className="stat-value" style={{color: 'var(--warning-yellow)'}}>3 Hits</div>
              <div className="stat-trend trend-up">Keywords: "Arms", "Leak"</div>
            </div>
          </div>

          <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 className="section-title" style={{margin: 0}}>Live Feed Analysis</h3>
                <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px', alignItems: 'center' }}>
                  <Search size={16} color="var(--text-secondary)" />
                  <input type="text" placeholder="Search keywords..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { text: "Protest planned near the main highway tomorrow.", platform: "X", sentiment: "Negative", risk: "High" },
                  { text: "Great job by the local police returning my lost wallet.", platform: "Facebook", sentiment: "Positive", risk: "Low" },
                  { text: "Video showing communal tension in sector 4. Looks morphed.", platform: "WhatsApp", sentiment: "Negative", risk: "Critical" },
                ].map((post, idx) => (
                  <div key={idx} style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', borderLeft: `4px solid ${post.risk === 'Critical' ? 'var(--alert-red)' : post.risk === 'High' ? 'var(--warning-yellow)' : 'var(--success-green)'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.platform} • Just now</span>
                      <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)' }}>{post.sentiment}</span>
                    </div>
                    <p style={{ fontSize: '0.95rem' }}>"{post.text}"</p>
                    {post.risk === 'Critical' && (
                      <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--alert-red)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <AlertTriangle size={14} /> AI Flag: Potential Morphed Media. Origin tracing initiated.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 className="section-title">Trending Hashtags</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { tag: "#TrafficJam", count: "12.4K", trend: "up" },
                  { tag: "#CitySafety", count: "8.2K", trend: "up" },
                  { tag: "#PoliceAlert", count: "5.1K", trend: "down" },
                  { tag: "#RallyTomorrow", count: "4.8K", trend: "up", alert: true },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: item.alert ? 'rgba(239, 68, 68, 0.1)' : 'transparent', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: item.alert ? 'var(--alert-red)' : 'var(--primary-accent)', fontWeight: 'bold' }}>{item.tag}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {item.count}
                      <TrendingUp size={16} color={item.trend === 'up' ? 'var(--alert-red)' : 'var(--success-green)'} style={{ transform: item.trend === 'down' ? 'scaleY(-1)' : 'none' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sentiment' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 className="section-title" style={{margin: 0}}>Public & Media Sentiment Analysis</h3>
            <select style={{ background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '5px 10px', borderRadius: '4px' }}>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Tracks the overall attitude of the public and media outlets towards police actions over time.
          </p>

          <div style={{ flex: 1, minHeight: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sentimentHistory} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--success-green)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--success-green)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--alert-red)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--alert-red)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(10,15,24,0.9)', border: '1px solid var(--border-color)' }} />
                <Area type="monotone" dataKey="positive" stroke="var(--success-green)" fillOpacity={1} fill="url(#colorPositive)" name="Positive Sentiment" />
                <Area type="monotone" dataKey="negative" stroke="var(--alert-red)" fillOpacity={1} fill="url(#colorNegative)" name="Negative Sentiment" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'fakenews' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{margin: 0, color: 'var(--alert-red)'}}>
              <FileWarning style={{marginRight: '8px'}} /> Fake News & Rumor Tracker
            </h3>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '12px' }}>Rumor Content</th>
                <th style={{ padding: '12px' }}>Origin Platform</th>
                <th style={{ padding: '12px' }}>Spread Speed</th>
                <th style={{ padding: '12px' }}>AI Verification</th>
                <th style={{ padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { content: "Massive gathering planned at Central Park violating section 144.", platform: "WhatsApp Groups", spread: "High (200+ shares/hr)", status: "Debunked", aiConf: "99%" },
                { content: "Police using excessive force during peaceful march in south zone.", platform: "X (Twitter)", spread: "Critical (Viral)", status: "Investigating", aiConf: "54%" },
                { content: "Fake circular regarding new traffic fines.", platform: "Facebook", spread: "Medium", status: "Debunked", aiConf: "95%" }
              ].map((fn, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '12px', maxWidth: '300px' }}>"{fn.content}"</td>
                  <td style={{ padding: '12px' }}>{fn.platform}</td>
                  <td style={{ padding: '12px', color: fn.spread.includes('High') || fn.spread.includes('Critical') ? 'var(--alert-red)' : 'var(--warning-yellow)' }}>{fn.spread}</td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: fn.status === 'Debunked' ? 'var(--success-green)' : 'var(--warning-yellow)' }}>{fn.status}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Confidence: {fn.aiConf}</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button style={{ background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>
                      Send to PR Desk
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default SocialIntel;
