import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import RoomContainer from 'containers/RoomContainer';
import './App.css';
import Home from 'screens/Home';
import { postRoom } from 'services/rooms';
import { postUsername } from 'services/usernames';
import { getOneRoom } from 'services/rooms';
import Logo from 'assets/qq_logo.png'

function App({ cableApp }) {
  const [username, setUsername] = useState(null)
  const [room, setRoom] = useState(null);
  const [roomForm, setRoomForm] = useState({
    code: ''
  })
  const history = useHistory();

  const handleRoomCreate = async (formData) => {
    const user = await postUsername(formData);
    setUsername(user);
    const roomInfo = await postRoom({ user_id: user.id });
    setRoom(roomInfo);
    history.push(`/rooms/${roomInfo.code}`);
  }

  const handleRoomJoin = async (formData) => {
    const user = await postUsername(formData);
    setUsername(user);
    const roomInfo = await getOneRoom(roomForm.code.toUpperCase());
    setRoom(roomInfo);
    history.push(`/rooms/${roomForm.code}`);
  }

  return (
    <div className="App">
      <div className="header">
        <img src={Logo} alt="qq logo" /><h1>Question Queue</h1>
      </div>
      <Switch>
        <Route path='/rooms/:code'>
          <RoomContainer
            username={username}
            cableApp={cableApp}
            room={room}
          />
        </Route>
        <Route path='/'>
          <Home
            handleRoomCreate={handleRoomCreate}
            handleRoomJoin={handleRoomJoin}
            setUsername={setUsername}
            username={username}
            roomForm={roomForm}
            setRoomForm={setRoomForm}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
