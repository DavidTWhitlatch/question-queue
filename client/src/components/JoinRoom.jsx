import { Button, TextField } from '@material-ui/core';

export default function JoinRoom({
  setRoomForm,
  setDisplay,
  setWhichSubmit,
  roomForm
}) {

  const handleChange = (e) => {
    const { value } = e.target;
    setRoomForm({ code: value });
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setDisplay(true);
      setWhichSubmit("join");
    }}>
      <h3>Enter a room code:</h3>
      <div className="name-input">
        <TextField
          id="outlined-search"
          label="Room Code"
          type="search"
          variant="outlined"
          value={roomForm.code}
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained">submit</Button>
      </div>
    </form>
  )
}
