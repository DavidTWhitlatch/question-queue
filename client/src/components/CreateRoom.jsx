import { Button } from '@material-ui/core';

export default function CreateRoom({
  setDisplay,
  setWhichSubmit
}) {
  return (
    <div>
      <h3>Start a new Queue</h3>
      <Button type='submit' color="primary" variant="contained" onClick={() => {
        setDisplay(true);
        setWhichSubmit("create");
      }}>New Queue</Button>
    </div>
  )
}
