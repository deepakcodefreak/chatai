import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from './../modules/todo/todoSlice'

function AddTodo() {

  const [todo, setTodo] = useState('')

  const dispath = useDispatch()

  function addTodoHandler(e){
    e.preventDefault()
    dispath(addTodo(todo))
    setTodo('')
  }

  return (
    <div className='p-2'>
      <form onSubmit={addTodoHandler} className='flex gap-3 rounded p-2 w-fit'>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" className='border border-black p-1' />
        <button type='submit' className='border border-black rounded py-1 px-2'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo