import {useState} from 'react'
import ToDoList from './components/ToDoList'
import Popup from './components/Popup'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, {id: Date.now(), text: taskText}])
      setTaskText('')
    }
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const openPopup = task => {
    setCurrentTask(task)
    setIsPopupOpen(true)
  }

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task => (task.id === id ? {...task, text: newText} : task)),
    )
    setIsPopupOpen(false)
  }

  return (
    <div className="app">
      <h1 className="todoHeading">Todo List</h1>
      <input
        type="text"
        className="inputtodo"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask} className="todoButton" type="button">
        Add Task
      </button>
      <ToDoList tasks={tasks} deleteTask={deleteTask} openPopup={openPopup} />
      {isPopupOpen && (
        <Popup
          task={currentTask}
          updateTask={updateTask}
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  )
}

export default App
