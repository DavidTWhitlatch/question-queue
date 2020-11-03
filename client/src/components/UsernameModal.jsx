import { useState, useEffect, useRef } from 'react';
import { Button, TextField } from '@material-ui/core';


export default function UsernameModal({ handleSubmit, setDisplay }) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;

  const modalRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (!e.composedPath().includes(modalRef.current)) {
        setDisplay(false)
      }
    }
    if (modalRef) {
      window.addEventListener("click", closeModal);
    }
    return () => window.removeEventListener("click", closeModal);
  }, [modalRef, setDisplay]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  }

  return (
    <>
      <div className='modal-background'></div>
      <form className='card modal' ref={modalRef} onSubmit={e => {
        e.preventDefault();
        handleSubmit(formData);
      }}>
        <h2>Please enter your full name</h2>
        <hr />
        <div className="name-input">
          <TextField
            id="outlined-search"
            label="Full Name"
            type="search"
            variant="outlined"
            value={name}
            onChange={handleChange}
          />
          <Button type="submit" color="primary" variant="contained">Submit</Button>
        </div>
      </form>
    </>
  )
}
