import { useState } from "react";
import StarRating from "./StarRating"
import { useDispatch } from "react-redux";
import { updateChatFeedback } from './../../modules/chat/chatSlice'


function ChatFeedbackForm({selectedChatData, toggleFeedbackForm}) {

  const dispatch = useDispatch()

  const [text, setText] = useState(selectedChatData?.chatFeedback?.text ?? '')
  const [rating, setRating] = useState(selectedChatData?.chatFeedback?.rating ?? 0)


  function onStarClickHandler(value){
    setRating(value+1)
  }

  function submitFeedBackHandler(e){
   e.preventDefault()
   dispatch(updateChatFeedback({
      rating,
      text,
      submitted: true
    }))
    toggleFeedbackForm();
  }

  return (
    <div className="relative">
      <form onSubmit={submitFeedBackHandler} className="p-5 flex flex-col gap-5">
        <StarRating onStarClick={onStarClickHandler} filledStars={rating}/>
        <input type="textarea" className="border p-2 rounded border-black" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className="border rounded py-2 px-4 bg-blue-500 text-white w-fit">Submit Feedback</button>
      </form>
      <button className="absolute top-4 right-4" onClick={toggleFeedbackForm}>
        <i className="fa-solid fa-xmark text-2xl"></i>
      </button>
    </div>
  )
}

export default ChatFeedbackForm