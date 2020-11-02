import React from 'react'

export default function Questions({ questions }) {
  return (
    <div>
      {questions.map(q => (
        <p key={q.id}>{q.content}</p>
      ))}
    </div>
  )
}
