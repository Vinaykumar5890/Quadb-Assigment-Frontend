import React from 'react'
import './index.css'
import ToDoItem from '../ToDoItem'

function ToDoList({tasks, deleteTask, openPopup}) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          openPopup={openPopup}
        />
      ))}
    </ul>
  )
}

export default ToDoList
