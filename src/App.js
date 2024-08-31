import logo from './logo.svg';
import './App.css';
//import QuestionDetails from './QuestionsDetailspage';
import QuestionDetails from './pages/QuestionsDetailspage';
import ChatBot from './components/ChatBot';
import OtpAuth from './components/OtpAuth';
import { useState } from 'react';
function App() {
   // Example questionId and userId, these would usually come from your state or context
   //const exampleQuestionId = 'exampleQuestionId';
   //const exampleUserId = 'exampleUserId';
   const exampleQuestionId = '60d5f488d8a0b7a7f7b8e2b1'; // Replace with a valid 24-character hex string
   const exampleUserId = '60d5f488d8a0b7a7f7b8e2b2'; // Replace with a valid 24-character hex string
   const [authenticated, setAuthenticated] = useState(false);
 
  return (
 
    <div className="App">
    Code Reviewer
    <QuestionDetails questionId={exampleQuestionId} userId={exampleUserId} />
    <div>
      {!authenticated ? (
        <OtpAuth onSuccess={() => setAuthenticated(true)} />
      ) : (
        <ChatBot />
      )}
    </div>
    </div>
  );
}

export default App;
