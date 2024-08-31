// components/RequestCodeButton.js
import React, { useState } from 'react';
import axios from 'axios';

const RequestCodeButton = ({ questionId, userId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log('Sending request with:', { questionId, userId });
  const handleRequestCode = async () => {
    setLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/notifications/request-code', { questionId, userId });
      alert('Notification sent successfully');
    } catch (err) {
      setError('Failed to send notification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleRequestCode} disabled={loading}>
        {loading ? 'Sending...' : 'Request Code for Review'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RequestCodeButton;
