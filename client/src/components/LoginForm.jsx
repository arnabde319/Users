import { useState } from 'react';

const LoginForm = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      onRegister({ name, email, password });
    } else {
      onLogin({ email, password });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {isRegistering && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </form>
  );
};

export default LoginForm;
