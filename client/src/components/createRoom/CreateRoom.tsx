import { io } from "socket.io-client"



const CreateRoom = () => {

  const socket = io(import.meta.env.VITE_REACT_APP_SOCKET_URL)

  console.log(socket);
  

  return (
    <div>CreateRoom</div>
  )
}

export default CreateRoom