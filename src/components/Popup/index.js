import './index.css'
import React, {useState} from 'react'

function Popup({task, updateTask, closePopup}) {
  const [newText, setNewText] = useState(task.text)

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTask(task.id, newText)
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2 className="todoHeading">Edit Task</h2>
        <input
          className="inputtodo"
          type="text"
          value={newText}
          onChange={e => setNewText(e.target.value)}
        />
        <button onClick={handleUpdate} className="todoButton1">
          Update
        </button>
        <button onClick={closePopup} className="todoButton1">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Popup
