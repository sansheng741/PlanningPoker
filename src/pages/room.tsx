import {socket} from '@/socket';
import React, {useEffect, useState} from "react";
import {useParams, history} from 'umi';
import {Button} from "antd";

interface UserType {
  username: string;
  userId: string;
}

interface RoomType {
  roomName: string;
  creator: UserType;
  members: UserType[];
}

const Room = () => {

  const [room, setRoom] = useState<RoomType | undefined>(undefined)
  const usernameFromSession = sessionStorage.getItem('username');
  const params  = useParams();


  function login() {
    socket.connect()
    socket.emit('login', usernameFromSession, ({isExists, rooms}) => {
    })
  }

  useEffect(() => {
    if (usernameFromSession && !socket.connected) {
      login()
    }

    socket.emit('joinRoom', params.roomName, ({user, room}) => {
      setRoom(room)
    })

    socket.on('notifyRoomMember', ({user, room}) => {
      setRoom(room)
    })

    socket.on('leaveRoom', ({user, room}) => {
      setRoom(room)
    })


  }, [])

  const leaveRoom = () => {
    socket.emit('leaveRoom', params.roomName)
    history.push('/')
  }

  return (
    <>
      <Button type="primary" onClick={leaveRoom}>离开房间</Button>
      <div>
        {
          room?.members.map(item => {
            return <p key={item.userId}>{item.username}</p>
          })
        }
      </div>
    </>
  );
};

export default Room;
