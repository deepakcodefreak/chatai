import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MessageWrapper from './MessageWrapper'
import { addMessage, updateChatStatus } from './../../modules/chat/chatSlice'
import { getAIMessage } from './../../services/aichat'
import { CHAT_STATUS_TYPES } from '../../constants'
import ChatFeedbackForm from './ChatFeedbackForm'

function ChatWindow() {

  const selectedChatData = useSelector((state)=>{
    return state.chats.find((chat)=>chat.id === state.selectedChat)
  })

  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  const dispatch = useDispatch()

  

  async function sendMessageHandler(){
    dispatch(addMessage({
      message: inputMessage,
      messageType: 'text',
      sender: 'USER'
    }))
    setInputMessage('')
    const aiMessage = await getAIMessage()
    dispatch(addMessage({
      message: aiMessage,
      messageType: 'text',
      sender: 'BOT' 
    }))
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const endChatHandler = ()=>{
    dispatch(updateChatStatus(CHAT_STATUS_TYPES.CLOSE))
    setShowFeedbackForm(true)
  }

  const toggleFeedbackForm = () =>{
    setShowFeedbackForm((value)=>{
      return !value
    })
  }

  useEffect(()=>{
    setShowFeedbackForm(false)
  },[selectedChatData.id])

  useEffect(() => {
    scrollToBottom();
  }, [selectedChatData.messageList]);

  return (
    <div className='w-full h-full border border-l-slate-300 relative'>
        <header className='flex justify-between p-4 border border-t-0 border-l-0 h-16 items-center font-bold text-2xl'>
            <div>AI Chat</div> 
            <div className={`ml-2 rounded-full h-3 w-3 ${selectedChatData.status === CHAT_STATUS_TYPES.OPEN ? 'bg-green-400': 'bg-red-400'}`}></div>
        </header> 
        <main className='h-full bg-slate-200 overflow-y-scroll p-5 relative' style={{height:selectedChatData.status === CHAT_STATUS_TYPES.OPEN ? 'calc(100% - 128px)': 'calc(100% - 64px)'}}>
          {!showFeedbackForm ? <div className='flex flex-col gap-2'>
            {
              selectedChatData.messageList.map((message, index)=>{
                return <MessageWrapper key={index} {...message}/>
              })
            }
            <div ref={messagesEndRef} />
          </div>: <ChatFeedbackForm id={selectedChatData.id} selectedChatData={selectedChatData} toggleFeedbackForm={toggleFeedbackForm}/>}
        </main>
        {!showFeedbackForm && selectedChatData.status === CHAT_STATUS_TYPES.CLOSE && <button onClick={toggleFeedbackForm} className='absolute top-20 right-2 bg-neutral-100 text-orange-500 border-orange-500 border-2 rounded py-1 px-2'>
            Feedback
        </button>  }
       {selectedChatData.status === CHAT_STATUS_TYPES.OPEN && <footer className='absolute border border-l-0 w-full flex p-2 gap-2 h-16'>
          <input 
            type='text' 
            className='w-full p-2 outline-none' 
            value={inputMessage} 
            onChange={(e)=>setInputMessage(e.target.value)} 
            placeholder='Type a message...'
            onKeyDown={(e)=>{
              if(e.key === 'Enter'){
                sendMessageHandler()
              }
            }}
          />
          <button className='border py-1 px-2 rounded bg-blue-300' onClick={sendMessageHandler}>Send</button>
          <button className='border py-1 px-2 rounded bg-red-300' onClick={endChatHandler}>End</button>
        </footer>}
    </div>
  )
}

export default ChatWindow