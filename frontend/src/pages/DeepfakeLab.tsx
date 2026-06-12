import React, { useState } from 'react';
import { Scan, ShieldAlert, CheckCircle, Upload, Play, AlertTriangle } from 'lucide-react';

const DeepfakeLab = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult({
        status: 'Deepfake Detected',
        confidence: '98.5%',
        anomalies: [
          'Facial blending artifact detected at 0:12s',
          'Unnatural eye-blink rate',
          'Audio-visual sync mismatch in frame 450'
        ]
      });
    }, 2000);
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      <div style={{ background: 'rgba(139, 92, 246, 0.15)', borderLeft: '4px solid #8b5cf6', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ color: '#8b5cf6', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Scan /> Next-Gen AI Deepfake & Image Analyzer
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Instantly detect morphed images and AI-generated audio/video to prevent communal tension.
          </p>
        </div>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-color)' }}>
          <Upload size={48} color="var(--text-secondary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '10px' }}>Upload Media for Analysis</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', textAlign: 'center' }}>
            Drop video (MP4) or image (JPG/PNG) files here.<br/>Max file size 50MB.
          </p>
          <button 
            onClick={handleScan}
            disabled={scanning}
            style={{ 
              background: '#8b5cf6', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', cursor: scanning ? 'not-allowed' : 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', opacity: scanning ? 0.7 : 1 
            }}
          >
            {scanning ? <Scan className="spin" /> : <Play size={16} />} 
            {scanning ? 'Running Neural Engine...' : 'Run Deep-Scan'}
          </button>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title">Analysis Results</h3>
          
          {scanning && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '1rem' }}>
              <div className="live-dot" style={{ width: '20px', height: '20px', background: '#8b5cf6', boxShadow: '0 0 15px #8b5cf6' }}></div>
              <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>Processing frame data...</div>
            </div>
          )}

          {!scanning && !result && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'var(--text-secondary)' }}>
              Awaiting media input...
            </div>
          )}

          {!scanning && result && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--alert-red)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--alert-red)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldAlert /> {result.status}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>AI Confidence Score</div>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--alert-red)' }}>{result.confidence}</div>
              </div>

              <div>
                <h4 style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>Detected Anomalies</h4>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {result.anomalies.map((anom: string, i: number) => (
                    <li key={i} style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '4px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertTriangle size={14} color="var(--warning-yellow)" /> {anom}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button style={{ flex: 1, background: 'var(--alert-red)', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Issue Fake News Alert</button>
                <button style={{ flex: 1, background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Generate Evidence Report</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeepfakeLab;
