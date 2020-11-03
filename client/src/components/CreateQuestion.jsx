import { useState } from 'react';
import { Button } from '@material-ui/core';

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
      <input
        type='text'
        value={content}
        onChange={handleChange}
      />
      <Button color="primary" variant="contained" >Ask</Button>
    </form>
  )
}
