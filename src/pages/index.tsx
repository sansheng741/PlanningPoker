import { socket } from '@/socket';
import {useEffect, useRef, useState} from "react";

export default function HomePage() {

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  socket.on('chat message', (msg) => {
    console.log('receive msg', msg)
  })

  const inputRef = useRef<any>()

  const sendMsg = () => {
    let msg = inputRef.current.value;
    socket.emit('chat message', msg)
    inputRef.current.value = '';
    // console.log(inputRef.current.value)
  }


  return (
    <div>
      {
        <div>是否连接到socket {''+isConnected} </div>
      }
      <ul id="messages"></ul>
      <input id="input" autoComplete="off" ref={inputRef}/>
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}
