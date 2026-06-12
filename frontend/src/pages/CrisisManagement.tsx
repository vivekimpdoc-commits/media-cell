import React from 'react';
import { Video, Megaphone, HeartHandshake, AlertTriangle, PlayCircle } from 'lucide-react';

const CrisisManagement = () => {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      
      {/* Crisis Response Section */}
      <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--alert-red)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 className="section-title" style={{margin: 0, color: 'var(--alert-red)'}}>
            <AlertTriangle style={{marginRight: '8px'}} /> Emergency Crisis Response
          </h3>
          <button style={{ background: 'var(--alert-red)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Issue Flash Alert
          </button>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
          Immediately broadcast emergency instructions across all connected networks, digital billboards, and SMS gateways.
        </p>
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px' }}>
          <strong style={{ display: 'block', marginBottom: '5px' }}>Draft Emergency Broadcast:</strong>
          <textarea 
            placeholder="Type emergency instructions here..." 
            style={{ width: '100%', height: '60px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '4px', padding: '8px', color: 'white', resize: 'none' }}
          ></textarea>
        </div>
      </div>

      <div className="grid-2">
        {/* Event Coverage - Live Stream */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="section-title">
            <Video style={{marginRight: '8px'}} /> Live Event Coverage
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Live streaming portal for Press Conferences and high-level official meetings.
          </p>
          <div style={{ 
            width: '100%', height: '200px', background: '#000', borderRadius: '8px', 
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            border: '1px solid var(--border-color)', position: 'relative'
          }}>
            <PlayCircle size={48} color="var(--primary-accent)" style={{ opacity: 0.8, cursor: 'pointer' }} />
            <span style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Start Official Broadcast</span>
            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(239, 68, 68, 0.2)', color: 'var(--alert-red)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
              OFFLINE
            </div>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '10px' }}>
            <button style={{ flex: 1, padding: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Schedule Press Meet</button>
            <button style={{ flex: 1, padding: '8px', background: 'var(--primary-accent)', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Go Live</button>
          </div>
        </div>

        {/* Community Outreach */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="section-title">
            <HeartHandshake style={{marginRight: '8px'}} /> Community Outreach (Good Work)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Promote positive interactions, rescue operations, and awareness campaigns.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: "Cyber Security Awareness Drive", date: "Today, 10:00 AM", reach: "45K Views" },
              { title: "Missing Child Reunited with Parents", date: "Yesterday, 4:30 PM", reach: "120K Views" },
              { title: "Traffic Rules Campaign at City Center", date: "June 10, 2026", reach: "80K Views" }
            ].map((camp, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{camp.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{camp.date}</div>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-green)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {camp.reach}
                </div>
              </div>
            ))}
          </div>
          <button style={{ width: '100%', marginTop: '1rem', padding: '10px', background: 'transparent', border: '1px dashed var(--border-color)', color: 'var(--primary-accent)', borderRadius: '4px', cursor: 'pointer' }}>
            + Create New Campaign
          </button>
        </div>
      </div>

    </div>
  );
};

export default CrisisManagement;
