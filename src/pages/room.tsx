import {socket} from '@/socket';
import {useEffect} from "react";


const DocsPage = () => {

  useEffect(() => {
    socket.emit('a', 'll')
  }, [])


  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;
