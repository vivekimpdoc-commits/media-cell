import React, { useState } from 'react';
import { AlertCircle, MapPin, User, Clock, PhoneCall, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';

const SOSEmergency = () => {
  const [activeSOS, setActiveSOS] = useState([
    {
      id: "SOS-092",
      source: "Meta (Instagram)",
      type: "Self-Harm Risk (Suicide Note Detected)",
      user: "@rahul_kumar99",
      location: [26.8467, 80.9462], // Lucknow
      locName: "Gomti Nagar, Lucknow",
      time: "2 mins ago",
      status: "Dispatching Unit",
      confidence: "98% (AI NLP)",
    },
    {
      id: "SOS-093",
      source: "X (Twitter) Emergency API",
      type: "Mob Violence Threat",
      user: "@anonymous_citizen",
      location: [26.8500, 80.9500],
      locName: "Sector 18 Market",
      time: "5 mins ago",
      status: "Unit Arrived",
      confidence: "85%",
    }
  ]);

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      <div style={{ background: 'rgba(239, 68, 68, 0.15)', borderLeft: '4px solid var(--alert-red)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ color: 'var(--alert-red)', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle /> Live SOS & Emergency Monitoring (Meta & X APIs)
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Real-time integration with Meta and X for critical life-threatening events.
          </p>
        </div>
        <div className="live-badge">API SYNC ACTIVE</div>
      </div>

      <div className="grid-2" style={{ flex: 1, gridTemplateColumns: '1fr 1fr' }}>
        {/* Alerts List */}
        <div className="glass-panel" style={{ padding: '1.5rem', overflowY: 'auto' }}>
          <h3 className="section-title">Critical Alerts Queue</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activeSOS.map((sos, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(0,0,0,0.3)', 
                border: `1px solid ${sos.status === 'Unit Arrived' ? 'var(--success-green)' : 'var(--alert-red)'}`, 
                borderRadius: '8px', 
                padding: '1rem' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--alert-red)' }}>{sos.type}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12}/> {sos.time}
                  </span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={14} color="var(--primary-accent)"/> {sos.user}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><strong>Source:</strong> {sos.source}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', gridColumn: 'span 2' }}><MapPin size={14} color="var(--warning-yellow)"/> {sos.locName}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                  <div style={{ fontSize: '0.8rem', color: sos.status === 'Unit Arrived' ? 'var(--success-green)' : 'var(--warning-yellow)' }}>
                    <strong>Status:</strong> {sos.status}
                  </div>
                  <button style={{ background: 'var(--primary-accent)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                    <PhoneCall size={14} /> Dispatch Nearest PCR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', position: 'relative', border: '1px solid var(--border-color)' }}>
          <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000, background: 'rgba(10,15,24,0.8)', padding: '10px', borderRadius: '8px', border: '1px solid var(--alert-red)' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Live Tracking</h4>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Auto-locating targets from metadata.</div>
          </div>
          <MapContainer center={[26.8467, 80.9462]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              className="map-tiles"
            />
            {activeSOS.map((sos, i) => (
              <CircleMarker key={i} center={sos.location as [number, number]} radius={20} pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.4 }}>
                <Popup>{sos.type} - {sos.locName}</Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SOSEmergency;
