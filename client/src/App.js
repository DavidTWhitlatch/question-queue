import { useState, useEffect } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import './App.css';
import CreateQuestion from './components/CreateQuestion';
import Questions from './components/Questions';
import RoomCode from './components/RoomCode';
import { getAllQuestions, postQuestion } from './services/questions';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const qList = await getAllQuestions();
      setQuestions(qList);
    }
    fetchQuestions()
  }, []);

  const handleCreate = async (formData) => {
    await postQuestion(formData);
  }

  const handleReceive = (qData) => {
    setQuestions(qData);
  }

  return (
    <div className="App">
      <ActionCableConsumer
        channel={{
          channel: 'RoomChannel'
        }}
        onConnected={() => {console.log("connected")}}
        onReceived={handleReceive}
      />
      <RoomCode />
      <Questions questions={questions} />
      <CreateQuestion handleCreate={handleCreate} />
    </div>
  );
}

export default App;
