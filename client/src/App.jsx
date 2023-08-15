import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', user);
      setLoggedInUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', user);
      setLoggedInUser(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${loggedInUser._id}`);
      setLoggedInUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <h1>Welcome, {loggedInUser.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
      )}
    </div>
  );
};

export default App;
