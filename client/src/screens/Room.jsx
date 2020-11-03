import AnswerQuestions from 'components/AnswerQuestions';
import Card from 'components/Card';
import CreateQuestion from 'components/CreateQuestion';
import Questions from 'components/Questions';
import RoomCode from 'components/RoomCode';

export default function Room({ questions, handleCreate, room, username }) {
  return (
    <div className="body">
      <Card >
        <RoomCode room={room} />
        <Questions
          questions={questions.sort((a, b) => b.favorites_count - a.favorites_count).filter(q => !q.answered)}
          username={username}
          room={room}
        />
        <CreateQuestion handleCreate={handleCreate} />
      </Card>
      <AnswerQuestions
        questions={questions.sort((a, b) => b.favorites_count - a.favorites_count).filter(q => q.answered)}
      />
    </div>
  );
}
