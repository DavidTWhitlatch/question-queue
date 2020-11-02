import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';
import UsernameModal from 'components/UsernameModal';
import { useState } from 'react';

export default function Home({
  handleRoomCreate,
  handleRoomJoin,
  ...props
}) {
  const [display, setDisplay] = useState(false)
  const [whichSubmit, setWhichSubmit] = useState(null)

  return (
    <div>
      {display && <UsernameModal
        {...props}
        handleSubmit={whichSubmit === "create" ? handleRoomCreate : handleRoomJoin}
      />}
      <h3>Question Queue</h3>
      <CreateRoom
        setDisplay={setDisplay}
        setWhichSubmit={setWhichSubmit}
      />
      <p>-- OR --</p>
      <JoinRoom
        {...props}
        setDisplay={setDisplay}
        setWhichSubmit={setWhichSubmit}
      />
    </div>
  )
}
