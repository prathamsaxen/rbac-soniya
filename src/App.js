import React, { useState } from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="app">
      <header>
        <h1>Admin Dashboard</h1>
        <nav>
          <button
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button
            className={activeTab === 'roles' ? 'active' : ''}
            onClick={() => setActiveTab('roles')}
          >
            Roles
          </button>
          <button
            className={activeTab === 'permissions' ? 'active' : ''}
            onClick={() => setActiveTab('permissions')}
          >
            Permissions
          </button>
        </nav>
      </header>
      <main>
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'roles' && <RoleManagement />}
        {activeTab === 'permissions' && <PermissionManagement />}
      </main>
    </div>
  );
};

export default App;

