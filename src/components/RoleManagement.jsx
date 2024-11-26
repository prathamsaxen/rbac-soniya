import React, { useState } from 'react';
import Table from './Table';
import styles from './RoleManagement.module.css';

const initialRoles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  { id: 3, name: 'Viewer', permissions: ['Read'] },
];

const RoleManagement = () => {
  const [roles, setRoles] = useState(initialRoles);
  const columns = ['Name', 'Permissions', 'Actions'];

  const handleEdit = (role) => {
    // Implement edit functionality
    console.log('Edit role:', role);
  };

  const handleDelete = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div className={styles.roleManagement}>
      <h2>Role Management</h2>
      <button className={styles.addButton}>Add Role</button>
      <Table
        columns={columns}
        data={roles.map(role => ({
          ...role,
          permissions: role.permissions.join(', ')
        }))}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default RoleManagement;

