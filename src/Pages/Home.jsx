import React from 'react'
import { useState } from 'react'

import TodoList from '../Components/TodoList/TodoList'
import AddTodo from '../Components/AddTodo/AddTodo'
import CompletedTodoList from '../Components/CompletedTodoList/CompletedTodoList'
import { useNavigate } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Home() {
  // Add Todo: Sadece todo ekleme işlemini yapacak.
  // Todo List: Todo listeleme işlemini yapacak, silme ve güncelleme işlemini barındıracak.
  // Completed Todo List: Tamamlanan Todo'ları listeleme işlemi yapacak.

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Sabah Kalk",
      isCompleted: false
    }
  ])

  const [completedTodoList, setCompletedTodoList] = useState([])
  return (
    <>
     <Navbar />
      <div className='p-15' style={{display: 'flex', justifyContent: 'center', height:'100vh'}}>
      <div style={{marginRight: 50}}>
      <AddTodo setTodo={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} completedTodoList={completedTodoList} setCompletedTodoList={setCompletedTodoList} />
      </div>
      <CompletedTodoList completedTodoList={completedTodoList} />
    </div>
     <Footer />
    </>
       
         

  )
}

export default Home