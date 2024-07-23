import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './action-creater/Index';

function App() {
  const tasksList = useSelector(state => state.tasks.tasksList);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState(new Set()); // Using a Set to track selected task indices

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleClick = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const toggleTaskSelection = (index) => {
    const updatedSelectedTasks = new Set(selectedTasks);

    if (updatedSelectedTasks.has(index)) {
      updatedSelectedTasks.delete(index);
    } else {
      updatedSelectedTasks.add(index);
    }

    setSelectedTasks(updatedSelectedTasks);
  };

  return (
    <>
      <h1>To-do list using React and Redux</h1>
      <input
        type="text"
        placeholder="Enter your pending task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Submit</button>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {tasksList.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTaskSelection(index)}
              style={{
                textDecoration: selectedTasks.has(index) ? 'line-through' : 'none'
              }}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
