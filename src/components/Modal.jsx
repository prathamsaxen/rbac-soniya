import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user || { name: '', email: '', role: '', status: 'Active' });

  useEffect(() => {
    setEditedUser(user || { name: '', email: '', role: '', status: 'Active' });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{user ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={editedUser.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={editedUser.status}
              onChange={handleChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.saveButton}>Save</button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

