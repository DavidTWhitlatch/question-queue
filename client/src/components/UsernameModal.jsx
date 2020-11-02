import { useState } from 'react';

export default function UsernameModal({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  }

  return (
    <div className='modal'>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit(formData);
      }}>
        <h3>Please tell us your name</h3>
        <p>name:</p>
        <input
          type='text'
          value={name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
