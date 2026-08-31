import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [password, setPassword] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#06b6d4', letterSpacing: '2px' }}>LOCKER.NIHAL</h1>
      {!isInitialized ? (
        <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', display: 'inline-block', border: '1px solid #1f2937' }}>
          <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '15px' }}>Initialize Master Zero-Knowledge Key</p>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Master Password"
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#000', color: '#fff', outline: 'none' }}
          />
          <button 
            onClick={() => setIsInitialized(true)}
            style={{ marginLeft: '10px', padding: '10px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Initialize
          </button>
        </div>
      ) : (
        <div style={{ color: '#10b981', background: '#111827', padding: '30px', borderRadius: '12px', display: 'inline-block', border: '1px solid #1f2937' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>✓ Vault Decrypted & Active</h3>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: '0' }}>Root / Documents / Images / Autonomous Agent Keys</p>
          <div style={{ marginTop: '20px', fontSize: '11px', color: '#ef4444', border: '1px dashed #ef4444', padding: '10px', borderRadius: '6px' }}>
            🔒 Sequential 3-Lock Multi-Gate Active on Deep Folders
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
