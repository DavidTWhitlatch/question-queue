import { Button } from '@material-ui/core';

export default function CreateRoom({
  setDisplay,
  setWhichSubmit
}) {
  return (
    <div>
      <p>Start a new Queue</p>
      <Button color="primary" variant="contained" onClick={() => {
        setDisplay(true);
        setWhichSubmit("create");
      }}>New Queue</Button>
    </div>
  )
}
