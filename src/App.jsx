import { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import CompletedTodoList from './Components/CompletedTodoList/CompletedTodoList'

function App() {

  // Yapılacaklar
  // > Todo List verisi tanımlanacak.
  // > Todo List verisini kullanacak component'lere prop olarak gönderilecek.

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
    <div style={{display: 'flex', justifyContent: 'center', height:'100vh', paddingTop: '20vh'}}>
      <div style={{marginRight: 50}}>
      <AddTodo setTodo={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} completedTodoList={completedTodoList} setCompletedTodoList={setCompletedTodoList} />
      </div>
      <CompletedTodoList completedTodoList={completedTodoList} />
    </div>
  )
}

export default App
