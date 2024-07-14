import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './../modules/todo/todoSlice'
import AddTodo from './AddTodo'

function Todos() {

  const todos = useSelector((state)=>{
    return state.todos
  })

  const dispatch = useDispatch();

  return (
    <div className='p-5'>
      <AddTodo/>
      {todos.map((todo)=><div key={todo.id} className='border p-2 border-dashed border-black flex gap-2 items-center w-fit'>
        <div>{todo.text}</div>
        <button 
          className='border border-rounded py-1 px-1 border-black rounded' 
          onClick={()=>dispatch(removeTodo(todo.id))}
        >
          Remove
        </button>
      </div>)}
      </div>
  )
}

export default Todos