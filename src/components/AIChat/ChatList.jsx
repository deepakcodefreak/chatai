import { useSelector } from 'react-redux'
import ChatCard from './ChatCard';
import { useDispatch } from 'react-redux';
import { createNewChat } from './../../modules/chat/chatSlice'

function ChatList() {

    const dispath = useDispatch()

    const chats = useSelector((state)=>{
        return state.chats
    })

    return (
        <div className='w-full flex flex-col border'>
            <div className='flex items-center px-2 h-16'>
                <button 
                    className='py-1 px-2 rounded border border-black w-fit'
                    onClick={()=>dispath(createNewChat())}
                >
                    + New Chat
                </button>
            </div>    
            <div className='flex flex-col border border-r-0'>
            {
                chats.map((chat)=>{
                    return <ChatCard key={chat.id} {...chat}/>
                })
            }
            </div>
        </div>
    )
}

export default ChatList