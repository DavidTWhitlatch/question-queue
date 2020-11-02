import React from 'react'
import { postUpvote } from 'services/questions'

export default function Questions({
  questions,
  username,
  room
}) {

  const handleClick = async (id) => {
    await postUpvote(username.id, id);
  }

  return (
    <div>
      {questions.sort((a,b) => b.favorites_count - a.favorites_count).map(q => (
        <div key={q.id} style={{ display: 'flex', justifyContent: 'center' }}>
          <p>{q.content}</p>
          <p>{q.favorites_count}</p>
          {
            username.id === room.username_id ?
              <button>answered</button> :
              <>
                {
                  !q.favorites.includes(username.id) && q.username.id !== username.id &&
                  <button onClick={() => handleClick(q.id)}>+1</button>
                }
              </>
          }
        </div>
      ))
      }
    </div >
  )
}
