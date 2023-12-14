import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  // Ref to focus on the input field when the component mounts
  const inputRef = useRef();
  
  // State to manage the task input value
  const [task, setTask] = useState("");

  // State to manage the list of tasks
  const [taskList, setTaskList] = useState([]);

  // State to manage error messages
  const [error, setError] = useState("");

  // useEffect to focus on the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      // Add the task to the taskList if it's not empty
      setTaskList([...taskList, task]);
      // Clear the task input field
      setTask("");
    } else {
      // Set an error message if the task is empty
      setError("Task is Empty.");
      // Focus on the input field to draw attention
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="border p-4 border border-secondary border border-4 rounded bg-info">
          <h1 className="text-center mb-4 fst-italic text-light">Task List</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* Input field for entering tasks */}
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter Task..."
                className="form-control"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
              {/* Display error message if there is an error */}
              {error ? <p className="text-danger mt-2">{error}</p> : ""}
            </div>
            <div className="d-flex justify-content-center mt-4">
              {/* Button to submit the form */}
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
          {/* Display the list of tasks */}
          <ul className="list-group mt-3">
            {taskList.map((task, index) => (
              <li className="list-group-item" key={index}>
                {task}
              </li>
            ))}
          </ul>
          {/* Footer text */}
          <p className="fst-italic text-light text-center">Dodong 2023</p>
        </div>
      </div>
    </>
  );
}

export default App;
