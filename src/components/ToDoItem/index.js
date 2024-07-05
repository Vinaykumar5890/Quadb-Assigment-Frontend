import React from 'react'
import './index.css'

function ToDoItem({task, deleteTask, openPopup}) {
  return (
    <li className="ToDoItem">
      <h1 className="todoHeading1">{task.text}</h1>
      <button onClick={() => openPopup(task)} className="todoButton1">
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)} className="todoButton1">
        Delete
      </button>
    </li>
  )
}

export default ToDoItem
