import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export default function CreateQuestion({ handleCreate }) {
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      content: value
    })
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      handleCreate(formData);
      setFormData({
        content: ''
      })
    }}>
      <div className="name-input">
        <TextField
          id="outlined-search"
          label="Question"
          type="search"
          variant="outlined"
          multiline
          value={content}
          onChange={handleChange}
        />
        <Button type='submit' color="primary" variant="contained">Ask</Button>
      </div>
    </form>
  )
}
