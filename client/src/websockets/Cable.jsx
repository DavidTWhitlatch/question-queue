import { useEffect } from 'react';

export default function Cable({
  setQuestions,
  cableApp,
  room
}) {

  useEffect(() => {
    if (room) {
      cableApp.room = cableApp.cable.subscriptions.create({
        channel: 'RoomChannel',
        code: room.code
      }, {
        received: (qData) => setQuestions(qData)
      })
    }
  }, [cableApp, setQuestions, room])

  return (<></>)
}
