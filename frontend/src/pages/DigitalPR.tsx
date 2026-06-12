import React, { useState } from 'react';
import { PenTool, CheckCircle, FileText, Share2, Search, BookOpen, Zap, Sparkles } from 'lucide-react';

const DigitalPR = () => {
  const [activeTab, setActiveTab] = useState<'manager' | 'ai-generator' | 'draft'>('ai-generator');
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleAIDraft = () => {
    setGeneratedText('Generating professional press note...');
    setTimeout(() => {
      setGeneratedText(`प्रेस नोट (Draft):
दिनांक: 12 जून 2026

थाना कोतवाली क्षेत्र अंतर्गत घटित चोरी की घटना का सफल अनावरण एवं शत-प्रतिशत बरामदगी।

संक्षिप्त विवरण:
आज दिनांक 12-06-2026 को थाना कोतवाली पुलिस द्वारा त्वरित कार्रवाई करते हुए 2 घंटे के भीतर मुख्य आरोपी को गिरफ्तार कर लिया गया है। 
बरामदगी: चोरी किया गया सामान शत-प्रतिशत बरामद।
धाराएं: 379/411 IPC
आरोपी: राम कुमार (बदला हुआ नाम)`);
    }, 1500);
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('ai-generator')}
          style={{ 
            background: 'transparent', border: 'none', color: activeTab === 'ai-generator' ? '#8b5cf6' : 'var(--text-secondary)', 
            fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', padding: '8px 16px',
            borderBottom: activeTab === 'ai-generator' ? '2px solid #8b5cf6' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <Zap size={20} color={activeTab === 'ai-generator' ? '#8b5cf6' : 'var(--text-secondary)'} /> AI Auto-Generator
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
          <BookOpen size={20} /> Release History
        </button>
      </div>

      {activeTab === 'ai-generator' && (
        <div className="grid-2 fade-in">
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 className="section-title">Input Incident Details</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Enter bullet points (Sections, Accused, Recovery). AI will format it.</p>
            <textarea 
              placeholder="- Theft in Kotwali area&#10;- Solved in 2 hours&#10;- 1 arrested (Ram Kumar)&#10;- 100% recovery&#10;- IPC 379/411"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ flex: 1, width: '100%', minHeight: '250px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '15px', color: 'white', resize: 'none' }}
            />
            <button 
              onClick={handleAIDraft} 
              style={{ background: '#8b5cf6', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '15px' }}
            >
              <Sparkles size={18} /> Generate Hindi Press Note
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 className="section-title">AI Generated Draft</h3>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '15px', border: '1px dashed var(--border-color)', color: generatedText.includes('Draft') ? 'var(--text-primary)' : 'var(--text-secondary)', whiteSpace: 'pre-wrap', overflowY: 'auto' }}>
              {generatedText || 'Awaiting input...'}
            </div>
            {generatedText.includes('Draft') && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button style={{ flex: 1, background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Save to Manager</button>
                <button style={{ flex: 1, background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Translate to English</button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'manager' && (
        <div className="glass-panel fade-in" style={{ padding: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{margin: 0}}>Official Press Releases</h3>
            <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px', alignItems: 'center' }}>
              <Search size={16} color="var(--text-secondary)" />
              <input type="text" placeholder="Search records..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none' }} />
            </div>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '12px' }}>PR ID</th>
                <th style={{ padding: '12px' }}>Headline / Subject</th>
                <th style={{ padding: '12px' }}>Date Issued</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "PR-2026-042", subject: "Traffic Diversion Plan for Weekend Rally", date: "June 11, 2026", status: "Published" },
                { id: "PR-2026-041", subject: "Fact Check: Fake Circular on Social Media", date: "June 10, 2026", status: "Published" },
                { id: "PR-2026-040", subject: "Successful Raid by Anti-Narcotics Task Force", date: "June 08, 2026", status: "Archived" }
              ].map((pr, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace' }}>{pr.id}</td>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{pr.subject}</td>
                  <td style={{ padding: '12px' }}>{pr.date}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ color: pr.status === 'Published' ? 'var(--success-green)' : 'var(--text-secondary)' }}>{pr.status}</span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'var(--text-primary)', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>View PDF</button>
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

export default DigitalPR;
