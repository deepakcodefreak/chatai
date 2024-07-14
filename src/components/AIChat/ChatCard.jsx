import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat } from './../../modules/chat/chatSlice'

function ChatCard({id, messageList, latestMessageTimestamp}) {

  const dispath = useDispatch();

  const isSelectedChat = useSelector((state)=>{
    return state.selectedChat === id
  })

  const latestMessage = messageList[messageList.length - 1]

  return (
    <div className={`border-b-[2px] p-4 cursor-pointer hover:bg-slate-100 ${isSelectedChat ? 'bg-slate-200' : ''}`} style={{}} onClick={()=>dispath(setSelectedChat(id))}>
      <h1 className='text-base'>{latestMessage && latestMessage.message}</h1>
      <h4 className='text-xs'>{new Date(latestMessageTimestamp).toLocaleString()}</h4>
    </div>
  )
}

export default ChatCard