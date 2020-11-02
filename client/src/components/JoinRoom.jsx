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
      <p>Enter a room code:</p>
      <input
        type='text'
        value={roomForm.code}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  )
}
