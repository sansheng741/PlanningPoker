import {socket} from '@/socket';
import {useEffect, useState} from "react";
import {Button, Card, Input, List, message, Modal} from "antd";
import {BankOutlined, UserOutlined} from "@ant-design/icons";
import {history} from 'umi';

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
      socket.emit('createRoom', roomName, ({rooms}) => {
        setIsRoomModalOpen(false);
        setRoomName('');
        setRooms(rooms)
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
    if (usernameFromSession) {
      handleLogin()
    }
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

  return (
    <>
      {contextHolder}
      <div style={{width: '70%', margin: '0 auto'}}>
        <div>Hi: {username} </div>
        <Button type="primary" onClick={showRoomModal}>Create Room</Button>
        <Modal title="取个响亮的名字吧😉" open={isNameModalOpen} onOk={handleNameModalOk} onCancel={handleNameModalCancel} maskClosable={false}>
          <Input size="large" prefix={<UserOutlined />} onChange={onUsernameChange}/>
        </Modal>
        <Modal title="房间名🏡" open={isRoomModalOpen} onOk={handleRoomModalOk} onCancel={handleRoomModalCancel} maskClosable={false}>
          <Input size="large" prefix={<BankOutlined />} onChange={onRoomNameChange} value={roomName}/>
        </Modal>
        <div style={{height: 100, backgroundColor: 'blue', color: '#fff', fontSize: 32, margin: '12px 0'}}>房间列表</div>
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
          renderItem={(item) => (
            <List.Item>
              <Card title={`🏡 ${item.title}`} extra={<a onClick={() => history.push('room')}>加入</a>}>创建者： {item.creator.username}</Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
