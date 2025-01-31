import React from 'react'


import { MdChecklist } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const nowDate = new Date();

function CompletedTodoList(props) {
  return (
    <div className="border border-gray-200 h-[685px] w-full max-w-[400px] p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-center mb-6">
    <MdChecklist className="text-purple-500 mr-4" size={48} />
    <h1 className="text-2xl font-bold text-gray-800">Tamamlananlar</h1>
  </div>
  
  <hr className="border-t border-gray-100 mb-4" />

  <ul className="space-y-3">
    {props.completedTodoList.map(todoItem => (
      <li
        key={todoItem.id}
        className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
      >
        <FaCheckCircle className="text-green-500 mr-3 shrink-0" size={20} />
        <span className="text-gray-700 truncate flex-1">{todoItem.title}</span>
        <span className="ml-2 text-sm text-gray-400 text-center shrink-0">
          {nowDate.toLocaleTimeString()}
          <br />
          {nowDate.toLocaleDateString()}
        </span>
      </li>
    ))}
  </ul>

  {props.completedTodoList.length === 0 && (
    <div className="text-center mt-8 text-gray-400">
      <span className="text-sm">Henüz tamamlanmış görev yok</span>
    </div>
  )}
</div>
  )
}

export default CompletedTodoList