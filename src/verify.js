// src/components/AuthComponent.js
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const AuthComponent = () => {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [result, setResult] = useState('');

  const saltRounds = 10;

  const handleHashPassword = () => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        return;
      }
      setHashedPassword(hash);
    });
  };

  const handleVerifyPassword = () => {
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error('Error comparing password:', err);
        return;
      }
      setResult(isMatch ? 'Password matches!' : 'Password does not match!');
    });
  };

  return (
    <div>
      <h1>Password Hashing and Verification</h1>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handleHashPassword}>Hash Password</button>
        {hashedPassword && (
          <div>
            <h3>Hashed Password:</h3>
            <p>{hashedPassword}</p>
          </div>
        )}
        <button onClick={handleVerifyPassword} disabled={!hashedPassword}>Verify Password</button>
        {result && (
          <div>
            <h3>Verification Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;


// ฟังก์ชันสำหรับคำนวณ time จากวันที่และเวลา
export const calculateTime = (secretKey) => {
    const date = new Date();
    const time = date.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // 'YmdH' format
    const timeWithKey = time + secretKey;
    return timeWithKey;
};

