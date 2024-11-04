import React from 'react';
import styles from './ConnectionManager.module.css';

interface ConnectionManagerProps {
  isVisible: boolean;
  onClose: () => void;
}

const ConnectionManager: React.FC<ConnectionManagerProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2>Connection Manager</h2>
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>
      <div className={styles.content}>
        {/* 这里后续可以添加连接列表和其他功能 */}
        <div className={styles.connectionList}>
          {/* 示例连接项 */}
          <div className={styles.connectionItem}>
            <span>Connection 1</span>
          </div>
          <div className={styles.connectionItem}>
            <span>Connection 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionManager;
