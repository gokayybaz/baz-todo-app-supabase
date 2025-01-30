import React from 'react'
import { useState } from 'react'

import TodoList from '../Components/TodoList/TodoList'
import AddTodo from '../Components/AddTodo/AddTodo'
import CompletedTodoList from '../Components/CompletedTodoList/CompletedTodoList'
import { Link, useNavigate } from 'react-router'
import supabase from '../Helpers/supabaseClient'

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
  const navigate = useNavigate();
  return (
    <>
     <nav>
        <div>
          <h1>Baz Todo App w/Supabase</h1>
        </div>
        <div>
          <Link to={"/login"}>Giriş Yap</Link>
          <Link to={"/register"}>Kayıt Ol</Link>
          <button onClick={ async() => {
             const { error } = await supabase.auth.signOut();
             if (error) {
               console.error("Çıkış yapılırken hata oluştu:", error);
               return;
             }
             navigate('login')
          }}>Çıkış Yap</button>
        </div>
      </nav>
      <div style={{display: 'flex', justifyContent: 'center', height:'100vh'}}>
      <div style={{marginRight: 50}}>
      <AddTodo setTodo={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} completedTodoList={completedTodoList} setCompletedTodoList={setCompletedTodoList} />
      </div>
      <CompletedTodoList completedTodoList={completedTodoList} />
    </div>

    </>
       
         

  )
}

export default Home