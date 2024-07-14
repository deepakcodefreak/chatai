import { useState } from 'react'
import { messageFeedbackMap } from '../../constants';
import { useDispatch } from 'react-redux';
import { addMessageFeedback } from './../../modules/chat/chatSlice'


function BotMessage({message, messageId, timestamp, messageFeedback}) {

  const [showRating, setShowRating] = useState(false)

  const dispatch = useDispatch()

  function onMouseOverHandler(){
      setShowRating(true)
  }

  function onMouseLeaveHandler(){
    setTimeout(() => {
      setShowRating(false)
    }, 1000);
  }

  function onMessageFeedbackClickHandler(type){
    dispatch(addMessageFeedback({
      messageId: messageId,
      messageFeedback: type
    }))
  }

  return (
    <div onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} className='flex float-start rounded-xl p-2 px-4 rounded-tl-none bg-white cursor-pointer relative'>
    <div className='flex flex-col gap-1'>
      <div>
        {message}
      </div>
      <div className='flex justify-end text-[10px]'>
        {new Date(timestamp).toLocaleString()}
      </div>
    </div>
    {
      messageFeedback && <div className='absolute bottom-1 left-4 text-[10px]'>
        <img src={messageFeedbackMap[messageFeedback].url} className='h-5 w-5'/>
      </div>
    }
    {showRating && <div className='absolute -top-10 left-1/2 -translate-x-1/2 p-1 rounded bg-white border border-black flex gap-2' onMouseOver={onMouseOverHandler}>
      {
        Object.values(messageFeedbackMap).map((fd, index)=>{
          return <button key={index} onClick={()=>onMessageFeedbackClickHandler(fd.type)}>
            <img src={fd.url} className='h-6 w-6'/>
          </button>
        })
      }
    </div>}
  </div>
  )
}

export default BotMessage