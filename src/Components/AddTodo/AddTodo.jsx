import React from 'react'
import "./AddTodo.css"
import { useState } from 'react'

function AddTodo(props) {
    const [inputValue, setInputValue] = useState("")
    const [todoId, setTodoId] = useState(2)
    const addTodoToList = (todo) => {
        if(inputValue.trim() === '' && inputValue === ''){
            alert("Lütfen görev giriniz")
        }else {
            setTodoId(todoId + 1)
        props.setTodo([...props.todoList, todo])
        setInputValue('')
        }
    }
    return (
        <div className="mb-8 group">
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Yeni görev ekle..."
            className="w-full px-5 py-3.5 text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm 
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-100 placeholder-gray-400
                      transition-all duration-150 ease-out pr-14"
            onKeyPress={(e) => e.key === 'Enter' && addTodoToList(e)}
          />
          
          <button
            onClick={() => {
                addTodoToList({id: todoId, title: inputValue, isCompleted: false})
            }}
            className="absolute right-2 top-2 p-2 bg-purple-500 hover:bg-purple-600 rounded-xl
                      shadow-sm transform active:scale-95 transition-all duration-150"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 4v16m8-8H4" 
              />
            </svg>
          </button>
        </div>
      
        <div className="mt-2 h-1 w-0 bg-purple-500 opacity-0 group-focus-within:w-full 
                      group-focus-within:opacity-100 transition-all duration-500 ease-out" />
      </div>
    )
}

export default AddTodo