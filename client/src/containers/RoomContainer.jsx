import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Room from 'screens/Room';
import Cable from 'websockets/Cable'
import { getAllQuestions, postQuestion } from 'services/questions';

export default function RoomContainer({ room, username, cableApp }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const qList = await getAllQuestions(room.code);
      setQuestions(qList);
    }
    if (room) {
      fetchQuestions();
    }
  }, [room]);

  const handleCreate = async (formData) => {
    await postQuestion({
      ...formData,
      room_id: room.id,
      username_id: username.id
    });
  }

  return (
    <div >
      {!username && <Redirect to='/' />}
      <Cable
        room={room}
        cableApp={cableApp}
        setQuestions={setQuestions}
      />
      <Room
        handleCreate={handleCreate}
        questions={questions}
        username={username}
        room={room}
      />
    </div>
  );
}
