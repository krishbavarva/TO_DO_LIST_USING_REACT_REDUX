import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask} from './action-creater/Index'; 

function App() {
  const tasksList = useSelector(state => state.tasks.tasksList);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleClick = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
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
