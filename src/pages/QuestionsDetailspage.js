// pages/QuestionDetails.js
import React from 'react';
import RequestCodeButton from '../components/RequestComponent';

const QuestionDetails = ({ questionId, userId }) => {
  // Assume questionId and userId are passed as props or retrieved from context/state

  return (
    <div>
      <h1>Question Details</h1>
      {/* Render question details here */}
      
      {/* Render the RequestCodeButton */}
      <RequestCodeButton questionId={questionId} userId={userId} />
    </div>
  );
};

export default QuestionDetails;
