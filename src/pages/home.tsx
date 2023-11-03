import {socket} from '@/socket';
import React, {useEffect, useState} from "react";
import {Button, Card, Col, Input, List, message, Modal, Row} from "antd";
import {BankOutlined, UserOutlined} from "@ant-design/icons";
import {history} from 'umi';
import styles from './index.less';

export default function HomePage() {
  const usernameFromSession = sessionStorage.getItem('username');
  const [isNameModalOpen, setIsNameModalOpen] = useState(!usernameFromSession);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [username, setUsername] = useState(usernameFromSession);
  const [roomName, setRoomName] = useState('');
  const [rooms, setRooms] = useState([])
  const [messageApi, contextHolder] = message.useMessage();


  const handleRoomModalOk = () => {
    if (roomName && roomName.length > 0) {
      socket.emit('createRoom', roomName ,({isExists}) => {
        if (isExists) {
          messageApi.open({
            type: 'error',
            content: '名字已被注册,换一个吧😧',
          });
        } else {
          setIsRoomModalOpen(false);
          setRoomName('');
        }
      })
    }
  };

  const handleRoomModalCancel = () => {
    setIsRoomModalOpen(false);
  };

  const showRoomModal = () => {
    setIsRoomModalOpen(true);
  };

  function handleLogin() {
    socket.connect()
    socket.emit('login', username, ({isExists, rooms}) => {
      if (isExists) {
        messageApi.open({
          type: 'error',
          content: '名字已被注册,换一个吧😧',
        });
      } else {
        setIsNameModalOpen(false);
        sessionStorage.setItem('username', username)
        setRooms(rooms)
      }
    })
  }

  useEffect(() => {
    if (usernameFromSession && !socket.connected) {
      handleLogin()
    }
    if (socket.connected) {
      socket.emit('fetchRooms', null, ({rooms}) => {
        setRooms(rooms)
      })
    }
    socket.on('notifyRoomUpdate', ({rooms}) => {
      setRooms(rooms)
    })
  }, [])

  const handleNameModalOk = () => {
    if (username && username.length > 0) {
      handleLogin();
    }
  };

  const handleNameModalCancel = () => {
    setIsNameModalOpen(false);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const onRoomNameChange = (e) => {
    setRoomName(e.target.value)
  }

  const joinRoom = (roomName) => {
    history.push(`room/${roomName}`)
  }

  return (
    <>
      {contextHolder}
      <div className={styles.content}>
        <Row justify={'space-between'}>
          <Col>
            <div>Hi: {username}</div>
          </Col>
          <Col>
            <Button type="primary" onClick={showRoomModal}>创建房间</Button>
          </Col>
        </Row>
        <Modal title="取个响亮的名字吧😉" open={isNameModalOpen} onOk={handleNameModalOk} onCancel={handleNameModalCancel} maskClosable={false}>
          <Input size="large" prefix={<UserOutlined />} onChange={onUsernameChange}/>
        </Modal>
        <Modal title="房间名🏡" open={isRoomModalOpen} onOk={handleRoomModalOk} onCancel={handleRoomModalCancel} maskClosable={false}>
          <Input size="large" prefix={<BankOutlined />} onChange={onRoomNameChange} value={roomName}/>
        </Modal>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={rooms}
          rowKey={(item) => item.roomName}
          renderItem={(item) => (
            <List.Item>
              <Card title={`🏡 ${item.roomName}`} extra={<a onClick={() => joinRoom(item.roomName)}>加入</a>}>创建者： {item.creator.username}</Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
