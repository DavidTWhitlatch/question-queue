import React from 'react';
import { Button } from '@material-ui/core';

import { postUpvote, postAnswer } from 'services/questions';

export default function Questions({
  questions,
  username,
  room,
  children
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
      {questions.filter(q => !q.answered).map(q => (
        <div key={q.id}>
          <p>{q.content}</p>
          <p>{q.username.name}</p>
          <p>upvotes: {q.favorites_count}</p>
          {
            username.id === room.username_id ?
              <Button color="primary" variant="contained" onClick={() => handleAnswerClick(q.id)}>answered</Button> :
              <>
                {
                  !q.favorites.includes(username.id) && q.username.id !== username.id &&
                  <Button color="primary" variant="contained"  onClick={() => handleUpvoteClick(q.id)}>+1</Button>
                }
              </>
          }
          <hr />
        </div>
      ))
      }
      {children}
      <p>answered:</p>
      {questions.filter(q => q.answered).map(q => (
        <div key={q.id} style={{ backgroundColor: 'lightgray' }}>
          <p>{q.content}</p>
          <p>{q.username.name}</p>
          <p>upvotes: {q.favorites_count}</p>
        </div>
      ))}
    </div >
  )
}
