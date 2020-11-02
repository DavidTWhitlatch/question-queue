export default function CreateRoom({
  setDisplay,
  setWhichSubmit
}) {
  return (
    <div>
      <p>Start a new Queue</p>
      <button onClick={() => {
        setDisplay(true);
        setWhichSubmit("create");
      }}>New Queue</button>
    </div>
  )
}
