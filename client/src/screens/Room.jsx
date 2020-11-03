import CreateQuestion from 'components/CreateQuestion';
import Questions from 'components/Questions';
import RoomCode from 'components/RoomCode';

export default function Room({ questions, handleCreate, room, username }) {
  return (
    <div>
      <RoomCode room={room} />
      <Questions
        questions={questions.sort((a, b) => b.favorites_count - a.favorites_count)}
        username={username}
        room={room}
      >
        <CreateQuestion handleCreate={handleCreate} />
      </Questions>
    </div>
  );
}
