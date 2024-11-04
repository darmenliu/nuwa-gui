import React, { useState } from 'react';
import ConnectionManager from './components/ConnectionManager/ConnectionManager';
import './App.css';

export default function App() {
  const [isConnectionManagerVisible, setConnectionManagerVisible] = useState(false);

  // 监听来自主进程的消息
  window.electron.ipcRenderer.on('toggle-connection-manager', () => {
    setConnectionManagerVisible(prev => !prev);
  });

  return (
    <div>
      <ConnectionManager
        isVisible={isConnectionManagerVisible}
        onClose={() => setConnectionManagerVisible(false)}
      />
      <div className={`mainContent ${isConnectionManagerVisible ? 'withSidebar' : ''}`}>
        {/* 主要内容区域 */}
        <h1>Your Main Content</h1>
      </div>
    </div>
  );
}
