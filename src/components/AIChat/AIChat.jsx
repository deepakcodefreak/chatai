import ChatList from './ChatList'
import ChatWindow from './ChatWindow'
import { useSelector } from 'react-redux'

function AIChat() {

  const selectedChat = useSelector((state)=>{
    return state.selectedChat
  })

  return (
    <div className='flex h-full'>
          <ChatList/>
        {selectedChat && <ChatWindow id={selectedChat}/>}
    </div>
  )
}

export default AIChat