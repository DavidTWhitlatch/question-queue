import React from 'react'

export default function AnswerQuestions({ questions }) {
  return (
    <div className="answered">
      {!!questions.length && <h3>answered:</h3>}
      {questions.map(q => (
        <div key={q.id}>
          <hr />
          <p>{q.content}</p>
          <div className="card-details">
            <div className="upvotes">
              <p>upvotes: {q.favorites_count}</p>
            </div>
            <p>-{q.username.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
