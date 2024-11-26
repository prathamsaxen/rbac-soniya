import React, { useState } from 'react';
import Table from './Table';
import Modal from './Modal';
import styles from './UserManagement.module.css';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const columns = ['Name', 'Email', 'Role', 'Status', 'Actions'];

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.userManagement}>
      <h2>User Management</h2>
      <button className={styles.addButton} onClick={handleAdd}>Add User</button>
      <Table
        columns={columns}
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          user={editingUser}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserManagement;

