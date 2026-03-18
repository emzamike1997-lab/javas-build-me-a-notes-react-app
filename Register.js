import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Register({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;