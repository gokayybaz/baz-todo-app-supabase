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
    <div style={{ backgroundColor: 'whitesmoke', width: '50vw', padding: 20, minHeight: 600 }}>
      <h1 style={{paddingLeft: 10}}>Yapılacaklar Listesi</h1>
      <ul className='main--todo--list'>
        {
          props.todoList.map((todoItem) =>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, userSelect: 'none', width: '100%', minWidth: 400, padding: 20, backgroundColor: todoItem.isCompleted ? '#e0ffe0' : '#ffe0e0' }} key={todoItem.id}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <input id={todoItem.id} style={{ width: 20, height: 20, marginRight: 15 }} type='checkbox' checked={todoItem.isCompleted} onChange={(e) => {

                  completeTodo(todoItem)

                }} />
                <label htmlFor={todoItem.id} style={todoItem.isCompleted ? { marginRight: 20, fontSize: 18, fontWeight: '600', textDecoration: 'line-through', color: 'black' } : { marginRight: 20, fontWeight: '600', fontSize: 18, color: 'black' }}>{todoItem.title}</label>
              </span>
              <button onClick={() => { deleteTodo(todoItem) }} style={{ backgroundColor: 'red', cursor: 'pointer', color: 'white', border: 'none', padding: 8, borderRadius: 10 }}> <IoTrashOutline size={25} /> </button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default TodoList