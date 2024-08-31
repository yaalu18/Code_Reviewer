// src/components/OtpAuth.js
import { useState } from 'react';
import axios from 'axios';
// Ensure this is not setting the wrong base URL
axios.defaults.baseURL = 'http://localhost:5000';  
const OtpAuth = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('request'); // 'request' or 'verify'

  const handleSendOtp = async () => {
    await axios.post('/api/otp/send-otp', { email });
    setStep('verify');
  };

  const handleVerifyOtp = async () => {
    const response = await axios.post('/api/otp/verify-otp', { email, otp });
    localStorage.setItem('token', response.data.token);
    onSuccess();
  };

  return (
    <div>
      {step === 'request' ? (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default OtpAuth;
