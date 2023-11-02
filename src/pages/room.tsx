import {socket} from '@/socket';
import React, {useEffect, useState} from "react";
import {history, useParams} from 'umi';
import {Avatar, Button, Col, Input, List, Row} from "antd";
import Poker from "@/components/Poker";
import styles from './index.less';

interface UserType {
  username: string;
  userId: string;
  vote: string;
}

interface RoomType {
  roomName: string;
  creator: UserType;
  members: UserType[];
}

const cards = [0, 0.5, 1, 2, 3, 5, 8, 13, 21, 34, 100, '?']
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


const Room = () => {

  const [room, setRoom] = useState<RoomType | undefined>(undefined)
  const usernameFromSession = sessionStorage.getItem('username');
  const params = useParams();
  const [checkedPoint, setCheckedPoint] = useState<string>('')
  const [story, setStory] = useState<string>()
  const [isDisplayResult, setIsDisplayResult] = useState<boolean>(false)

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
      console.log(room)
      setRoom(room)
    })

    socket.on('notifyRoomMember', ({room}) => {
      setRoom(room)
    })

    socket.on('newMemberJoin', ({room}) => {
      setRoom(room)
      setCheckedPoint('')
    })

    socket.on('leaveRoom', ({user, room}) => {
      setRoom(room)
    })

    socket.on('story', ({story}) => {
      console.log(story)
      setStory(story)
      setCheckedPoint('')
    })

  }, [])

  useEffect(() => {
    // 防止刷新暴露point
    setTimeout(() => {
      let unVoteUser = room?.members?.filter((item) => !item.vote)
      if (unVoteUser && unVoteUser.length > 0) {
        setIsDisplayResult(false)
      } else {
        setIsDisplayResult(true)
      }
    },500)
  }, [room])

  const leaveRoom = () => {
    socket.emit('leaveRoom', params.roomName)
    history.push('/')
  }

  const handleCheckPoint = (point) => {
    setCheckedPoint(point)
    socket.emit('vote', point)
  }

  const submitStory = (e) => {
    console.log(e.target.value)
    socket.emit('story', e.target.value)
    socket.emit('clearVote', room?.roomName)
    setCheckedPoint('')
  }

  return (
    <div className={styles.content}>
      <Row justify={'space-between'}>
        <Col>
          <div>Hi: {usernameFromSession} </div>
        </Col>
        <Col>
          <div>房间：{room?.roomName}</div>
        </Col>
        <Col>
          <Button type="primary" onClick={leaveRoom}>离开房间</Button>
        </Col>
      </Row>
      <p style={{color: '#828282', fontSize: 24}}>故事卡: </p>
      <Input
        disabled={usernameFromSession !== room?.creator.username}
        onPressEnter={submitStory}
        placeholder="按下回车确认"
        value={story}
      />
      <p style={{color: '#828282', fontSize: 24}}>卡片: </p>
      <Row gutter={[0, 8]}>
        {
          cards.map(item => {
            return (
              <Col key={item} flex={1}>
                <Poker
                  point={item}
                  style={{
                    backgroundColor: `${checkedPoint === item+'' ? '#39f3149e' : '#FFF'}`,
                    color: `${checkedPoint === item+'' ? '#FFF' : ''}`
                  }}
                  onClick={handleCheckPoint}
                />
              </Col>
            )
          })
        }
      </Row>
      <p style={{color: '#828282', fontSize: 24}}>成员: </p>
      <List
        itemLayout="horizontal"
        dataSource={room?.members}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{backgroundColor: ColorList[index % ColorList.length], verticalAlign: 'middle'}}
                  size={72}
                >
                  {item.username}
                </Avatar>}
            />
            {
              isDisplayResult && (
                <div style={{fontSize: 36, fontWeight: 'bold', color:'#5190BF'}}>{item.vote}</div>
              )
            }
            {
              item.vote && !isDisplayResult && (
                <div style={{fontSize: 36, fontWeight: 'bold', color:'#5190BF'}}>✔</div>
              )
            }
          </List.Item>
        )}
      />
    </div>
  );
};

export default Room;
