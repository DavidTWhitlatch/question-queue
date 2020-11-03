import React from 'react';
import { Button } from '@material-ui/core';

import { postUpvote, postAnswer } from 'services/questions';
import Card from './Card';

export default function Questions({
  questions,
  username,
  room
}) {

  const handleUpvoteClick = async (id) => {
    await postUpvote(username.id, id);
  }

  const handleAnswerClick = async (id) => {
    await postAnswer(id);
  }

  return (
    <div>
      <hr />
      {questions.map(q => (
        <div key={q.id}>
          <Card>
            <h3>{q.content}</h3>
            <div className="card-details">
              <div className="upvotes">
                {
                  username.id === room.username_id ?
                    <Button className="question-button" color="primary" variant="contained" onClick={() => handleAnswerClick(q.id)}>answered</Button> :
                    <Button className="question-button" type='submit' color="primary" disabled={q.favorites.includes(username.id)} variant="contained" onClick={() => handleUpvoteClick(q.id)}>+1</Button>
                }
                <p>upvotes: {q.favorites_count}</p>
              </div>
              <p style={{ color: "gray" }}>-{q.username.name}</p>
            </div>
          </Card>
        </div>
      ))
      }
      {!!questions.length && <hr />}
    </div >
  )
}
