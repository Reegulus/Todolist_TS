import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    function removeTask(id: number) {
        let task = tasks.filter(t => t.id !== id)
        setTasks(task)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;

