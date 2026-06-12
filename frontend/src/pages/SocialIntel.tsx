import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, TrendingUp, Search, Activity, FileWarning, BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SocialIntel = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'monitoring' | 'fakenews' | 'sentiment'>('monitoring');

  // State for real data
  const [sentimentHistory, setSentimentHistory] = useState([]);
  const [feed, setFeed] = useState([]);
  const [fakeNews, setFakeNews] = useState([]);

  // Fetch data from backend on mount
  useEffect(() => {
    // Sentiment history
    fetch('/api/social-intel/sentiment-history')
      .then(res => res.json())
      .then(data => setSentimentHistory(data))
      .catch(err => console.error('Sentiment fetch error:', err));
    // Live feed
    fetch('/api/social-intel/live-feed')
      .then(res => res.json())
      .then(data => setFeed(data))
      .catch(err => console.error('Live feed fetch error:', err));
    // Fake news
    fetch('/api/social-intel/fake-news')
      .then(res => res.json())
      .then(data => setFakeNews(data))
      .catch(err => console.error('Fake news fetch error:', err));
  }, []);

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.file;
    if (!fileInput.files.length) return;
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      // prepend new item to feed
      const newItem = {
        text: `User uploaded media`,
        platform: 'User',
        sentiment: 'Neutral',
        risk: 'Low',
        mediaUrl: result.url,
      };
      setFeed(prev => [newItem, ...prev]);
      alert('Upload successful');
    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed');
    }
  };

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
          <Activity size={20} /> {t('social.liveMonitoring')}
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
          <BarChart2 size={20} /> {t('social.detailedSentiment')}
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
          <FileWarning size={20} /> {t('social.fakeNewsTracker')}
        </button>
      </div>

      {activeTab === 'monitoring' && (
        <div className="fade-in">
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            <div className="glass-panel stat-card">
              <div className="stat-title">{t('social.platformMonitored')}</div>
              <div className="stat-value" style={{fontSize: '1.5rem', marginTop: '10px'}}>
                <span style={{color: '#1DA1F2', marginRight: '10px'}}>X (Twitter)</span>
                <span style={{color: '#4267B2', marginRight: '10px'}}>Facebook</span>
                <span style={{color: '#E1306C'}}>Instagram</span>
              </div>
            </div>
            <div className="glass-panel stat-card">
              <div className="stat-title">{t('social.deepfakeAlerts')}</div>
              <div className="stat-value" style={{color: 'var(--alert-red)'}}>24 Detected</div>
              <div className="stat-trend trend-up">AI Confidence: 94%</div>
            </div>
            <div className="glass-panel stat-card">
              <div className="stat-title">{t('social.darkWebMentions')}</div>
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
                  <input type="text" placeholder={t('social.searchPlaceholder')} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Upload Section */}
                <div className="glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
                  <form onSubmit={handleUpload}>
                    <input type="file" name="file" accept="image/*,video/*" style={{ marginBottom: '0.5rem' }} />
                    <button type="submit" style={{ background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>{t('social.uploadMedia')}</button>
                  </form>
                </div>
                {feed.map((post, idx) => (
                  <div key={idx} style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', borderLeft: `4px solid ${post.risk === 'Critical' ? 'var(--alert-red)' : post.risk === 'High' ? 'var(--warning-yellow)' : 'var(--success-green)'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.platform} • Just now</span>
                      <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)' }}>{post.sentiment}</span>
                    </div>
                    <p style={{ fontSize: '0.95rem' }}>{post.text}</p>
                    {post.mediaUrl && (
                      <div style={{ marginTop: '8px' }}>
                        <img src={post.mediaUrl} alt="uploaded" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                      </div>
                    )}
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
              <h3 className="section-title">{t('social.liveFeedAnalysis')}</h3>
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
            <select style={{ background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '5px 10px', borderRadius: '4px' }} onChange={e => {
                // Simple filter placeholder – you can extend this later
                const range = e.target.value;
                // For now we just re-fetch the same data
                fetch('/api/social-intel/sentiment-history')
                  .then(r => r.json())
                  .then(data => setSentimentHistory(data))
                  .catch(err => console.error(err));
              }}>
                <option>{t('social.last7Days')}</option>
                <option>{t('social.last30Days')}</option>
                <option>{t('social.thisYear')}</option>
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
              <FileWarning style={{marginRight: '8px'}} /> {t('social.fakeNewsAndRumorTracker')}
            </h3>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '12px' }}>{t('social.rumorContent')}</th>
                <th style={{ padding: '12px' }}>{t('social.originPlatform')}</th>
                <th style={{ padding: '12px' }}>{t('social.spreadSpeed')}</th>
                <th style={{ padding: '12px' }}>{t('social.aiVerification')}</th>
                <th style={{ padding: '12px' }}>{t('social.action')}</th>
              </tr>
            </thead>
            <tbody>
              {fakeNews.map((fn, i) => (
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
