import React, { useState } from 'react';
import styles from './PermissionManagement.module.css';

const initialPermissions = [
  { id: 1, name: 'Read', description: 'Allows reading data' },
  { id: 2, name: 'Write', description: 'Allows creating and updating data' },
  { id: 3, name: 'Delete', description: 'Allows deleting data' },
];

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(initialPermissions);

  const handleTogglePermission = (permissionId) => {
    setPermissions(permissions.map(permission =>
      permission.id === permissionId
        ? { ...permission, enabled: !permission.enabled }
        : permission
    ));
  };

  return (
    <div className={styles.permissionManagement}>
      <h2>Permission Management</h2>
      <div className={styles.permissionList}>
        {permissions.map(permission => (
          <div key={permission.id} className={styles.permissionItem}>
            <div className={styles.permissionInfo}>
              <h3>{permission.name}</h3>
              <p>{permission.description}</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={permission.enabled}
                onChange={() => handleTogglePermission(permission.id)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionManagement;

