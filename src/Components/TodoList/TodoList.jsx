import React from 'react'
import "./TodoList.css"

import { IoTrashOutline } from "react-icons/io5";


function TodoList(props) {

  // Todo durumunu tamamlandı yapmak için yazdığım kod.
  const completeTodo = (todo) => {
    const newList = props.todoList.map(todoItem => {
      if (todoItem.id === todo.id) {
        // Todo tamamlandıktan sonra 1 saniye bekleyip completed todo list'e ilgili todo'yu eklesin.
        setTimeout(() => props.setCompletedTodoList([...props.completedTodoList, todoItem])
          , 1000)
        return { ...todoItem, isCompleted: true }
      }
      return todoItem
    })
    props.setTodoList(newList)
    // Todo tamamlandıktan sonra 1 saniye bekleyip yapılacaklar listesinden silsin.
    setTimeout(() => deleteTodo(todo), 1000)
  }

  const deleteTodo = (todo) => {
    const newList2 = props.todoList.filter(todoItem =>
      todo.id !== todoItem.id
    )
    props.setTodoList(newList2)
  }


  return (
    <div className="border border-gray-200 h-[600px] w-[50vw]  p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 style={{paddingLeft: 10}}>Yapılacaklar Listesi</h1>
     <ul className="space-y-3">
  {props.todoList.map(todo => (
    <li
      key={todo.id}
      className="relative flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-out group border border-gray-100"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => completeTodo(todo)}
            className="sr-only" 
          />
          <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors
            ${todo.isCompleted ? 'bg-purple-500 border-purple-500' : 'bg-white border-gray-300'}`}>
            {todo.isCompleted && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </label>

        <span className={`flex-1 truncate text-gray-700 transition-all ${
          todo.isCompleted ? 'line-through text-gray-400' : ''
        }`}>
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo)}
        className="ml-2 p-1.5 hover:bg-gray-50 rounded-lg transition-colors duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      {todo.isCompleted && (
        <div className="absolute inset-0 border-2 border-purple-100 rounded-xl pointer-events-none" />
      )}
    </li>
  ))}
</ul>
    </div>
  )
}

export default TodoList