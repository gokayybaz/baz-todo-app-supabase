import React from 'react'


import { MdChecklist } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


function CompletedTodoList(props) {
  return (
    <div style={{border: '1px solid black',height: 'max-content', minHeight: 600, width: 400, maxWidth: 400, padding: 20}}>
        <h1 style={{marginBottom: 15, display: 'flex', alignItems: 'center'}}><MdChecklist size={48} style={{marginRight: 20}} /> Tamamlananlar</h1>
        <hr />
        <ul>
            {
                props.completedTodoList.map(todoItem => <li style={{marginTop: 15,}}  key={todoItem.id}> <FaCheckCircle size={20} style={{marginRight: 5}} /> {todoItem.title} <hr style={{marginTop: 15, marginBottom: 15}}></hr></li> )
            }
        </ul>
    </div>
  )
}

export default CompletedTodoList