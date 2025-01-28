import React from 'react'
import "./AddTodo.css"
import { useState } from 'react'

function AddTodo(props) {
    const [inputValue, setInputValue] = useState("")
    const [todoId, setTodoId] = useState(2)
    const addTodoToList = (todo) => {
        setTodoId(todoId + 1)
        props.setTodo([...props.todoList, todo])
    }
    return (
        <div style={{marginBottom: 40}}>
            <input style={{padding: 10, width: 400,}} type="text" placeholder='Yapılacak giriniz...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button style={{padding: 10, width: 80, marginLeft: 10}} onClick={() => {
                addTodoToList(
                    {
                        id: todoId,
                        title: inputValue,
                        isCompleted: false
                    }
                )
                setInputValue('')
            }}>Ekle</button>
        </div>
    )
}

export default AddTodo