import React, { useState } from 'react';
import { Target, Languages, Clock, AlertTriangle, MessageSquare, Zap } from 'lucide-react';

const WarRoom = () => {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', position: 'relative' }}>
      
      {/* War Room Header */}
      <div style={{ position: 'absolute', top: -80, left: 0, right: 0, height: '100vh', background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }}></div>
      
      <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--alert-red)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="live-badge" style={{ animation: 'pulse 1s infinite' }}>
            <div className="live-dot" style={{ background: 'white' }}></div> WAR ROOM ACTIVE (24/7)
          </div>
          <h2 style={{ margin: 0, color: 'var(--alert-red)', letterSpacing: '2px' }}>CENTRAL COMMAND</h2>
        </div>
        <div style={{ color: 'var(--alert-red)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock /> Shift: Alpha (08:00 - 16:00)
        </div>
      </div>

      <div className="grid-3" style={{ flex: 1, gridTemplateColumns: '1fr 1fr 1fr' }}>
        
        {/* Multi-lingual Tracking */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title" style={{ color: 'var(--warning-yellow)' }}>
            <Languages style={{marginRight: '8px'}} /> Multi-Lingual Engine
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Auto-translating regional dialects (Bhojpuri, Awadhi, Braj) for threat detection.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { dialect: 'Bhojpuri', original: 'ई लोगन के इहाँ से भगाओ जल्दी!', translated: 'Drive these people out of here quickly!', risk: 'High' },
              { dialect: 'Awadhi', original: 'चौराहे पे बवाल होए वाला है।', translated: 'There is going to be a riot at the intersection.', risk: 'Critical' }
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', borderLeft: `3px solid ${item.risk === 'Critical' ? 'var(--alert-red)' : 'var(--warning-yellow)'}` }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary-accent)', fontWeight: 'bold', marginBottom: '5px' }}>Detected: {item.dialect}</div>
                <div style={{ fontSize: '0.9rem', marginBottom: '8px', fontStyle: 'italic' }}>"{item.original}"</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '4px' }}>
                  <strong>EN:</strong> {item.translated}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Response First Reaction SLA */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title" style={{ color: 'var(--primary-accent)' }}>
            <Zap style={{marginRight: '8px'}} /> First Reaction SLA (15m)
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Tracking response time for issuing official statements post-incident.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', border: '8px solid rgba(239, 68, 68, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: -8, left: 0, width: '50%', height: '100%', borderTop: '8px solid var(--alert-red)', borderLeft: '8px solid var(--alert-red)', borderRadius: '150px 0 0 150px', transformOrigin: 'right center', transform: 'rotate(45deg)' }}></div>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--alert-red)' }}>12m</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Remaining</span>
            </div>
            
            <div style={{ width: '100%', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Incident: Highway Blockade</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Drafting official PR...</div>
              <button style={{ marginTop: '10px', background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Push Statement</button>
            </div>
          </div>
        </div>

        {/* WhatsApp Channel Outreach */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title" style={{ color: '#25D366' }}>
            <MessageSquare style={{marginRight: '8px'}} /> Official WA Channels
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Direct broadcast to district-level citizen WhatsApp channels.</p>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: '8px', padding: '1rem' }}>
              <strong style={{ display: 'block', marginBottom: '10px' }}>New Broadcast Message:</strong>
              <textarea 
                placeholder="Enter verified fact-check or alert here to blast to all citizens..."
                style={{ width: '100%', height: '100px', background: 'rgba(0,0,0,0.3)', border: 'none', borderRadius: '4px', padding: '8px', color: 'white', resize: 'none', marginBottom: '10px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Audience: 2.5M+</span>
                <button style={{ background: '#25D366', color: 'black', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Send via API</button>
              </div>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Channel Health</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '8px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>
                <span>Lucknow Zone (Active)</span>
                <span style={{ color: 'var(--success-green)' }}>98% Delivery</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WarRoom;
