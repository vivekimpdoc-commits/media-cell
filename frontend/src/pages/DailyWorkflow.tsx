import React, { useState } from 'react';
import { Sunrise, FileText, CheckCircle, Clock, Send, ShieldAlert } from 'lucide-react';

const DailyWorkflow = () => {
  const [activeTab, setActiveTab] = useState<'morning' | 'verification' | 'counter'>('morning');

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('morning')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'morning' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'morning' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Sunrise size={20} /> Morning Scanning (06:00 - 08:00)
        </button>
        <button 
          onClick={() => setActiveTab('verification')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'verification' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'verification' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Clock size={20} /> SHO Quick Verification
        </button>
        <button 
          onClick={() => setActiveTab('counter')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'counter' ? 'var(--primary-accent)' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'counter' ? '2px solid var(--primary-accent)' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <CheckCircle size={20} /> Counter-Narrative Release
        </button>
      </div>

      {activeTab === 'morning' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <h3 className="section-title">Print & Digital News Clippings</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Daily review of regional print media and news channels for negative reporting.</p>
          
          <div className="grid-2">
            {[
              { paper: "Dainik Jagran", headline: "Police delay response in theft case.", sentiment: "Negative", time: "07:15 AM" },
              { paper: "Amar Ujala", headline: "Traffic jam nightmare at highway.", sentiment: "Neutral", time: "07:30 AM" },
              { paper: "Local News TV", headline: "Rumors of violence in sector 4.", sentiment: "Critical", time: "07:45 AM" }
            ].map((news, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: `3px solid ${news.sentiment === 'Critical' ? 'var(--alert-red)' : 'var(--warning-yellow)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--primary-accent)' }}>{news.paper}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{news.time}</span>
                </div>
                <p style={{ margin: '0 0 10px 0' }}>"{news.headline}"</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ flex: 1, background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '6px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Send to SHO for Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <h3 className="section-title">Pending Fact-Check Reports from Stations</h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '1rem' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '12px' }}>Incident Reference</th>
                <th style={{ padding: '12px' }}>Station (SHO)</th>
                <th style={{ padding: '12px' }}>Time Elapsed</th>
                <th style={{ padding: '12px' }}>Report Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Rumors of violence in sector 4</td>
                <td style={{ padding: '12px' }}>Sector 4 PS</td>
                <td style={{ padding: '12px', color: 'var(--alert-red)', fontWeight: 'bold' }}>45 mins (SLA breach warning)</td>
                <td style={{ padding: '12px' }}><button style={{ background: 'transparent', border: '1px solid var(--alert-red)', color: 'var(--alert-red)', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Send Reminder Ping</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Police delay response in theft case</td>
                <td style={{ padding: '12px' }}>Kotwali PS</td>
                <td style={{ padding: '12px', color: 'var(--success-green)' }}>15 mins</td>
                <td style={{ padding: '12px', color: 'var(--success-green)' }}>Report Received (Ready for PR)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'counter' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <h3 className="section-title">Counter-Narrative & Fact Check Publishing</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Draft and release official rebuttals using predefined templates with blurred sensitive data.</p>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ color: 'var(--success-green)' }}>Ready for Release: Kotwali PS Theft Case</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--alert-red)' }}>
                <ShieldAlert size={14} /> Auto-Privacy: Victim names masked
              </div>
            </div>
            
            <textarea 
              readOnly 
              value={"खंडन (Fact Check): कतिपय समाचार पत्रों में प्रकाशित खबर 'चोरी के मामले में पुलिस की देरी' पूर्णतः भ्रामक है। थाना कोतवाली पुलिस द्वारा तत्काल मौके पर पहुंचकर 2 घंटे के भीतर मुख्य आरोपी को गिरफ्तार कर लिया गया है। आमजन से अनुरोध है कि अफवाहों पर ध्यान न दें।"}
              style={{ width: '100%', height: '100px', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', color: 'white', marginTop: '10px', resize: 'none' }}
            />
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button style={{ background: '#1DA1F2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Send size={16} /> Post on X (Twitter)
              </button>
              <button style={{ background: '#4267B2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Send size={16} /> Post on Facebook
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DailyWorkflow;
