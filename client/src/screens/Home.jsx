import Card from 'components/Card'
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
    <div className="body">
      {display && <UsernameModal
        {...props}
        setDisplay={setDisplay}
        handleSubmit={whichSubmit === "create" ? handleRoomCreate : handleRoomJoin}
      />}
      <Card>
        <CreateRoom
          setDisplay={setDisplay}
          setWhichSubmit={setWhichSubmit}
        />
      </Card>
      <p>-- OR --</p>
      <Card>
        <JoinRoom
          {...props}
          setDisplay={setDisplay}
          setWhichSubmit={setWhichSubmit}
        />
      </Card>
    </div>
  )
}
