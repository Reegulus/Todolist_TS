import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'
function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<FilterValueType>('all')

    function removeTask(id: number) {
        let task = tasks.filter(t => t.id !== id)
        setTasks(task)
    }

    let taskForTodolist = tasks
    if(filter === 'active') {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }
    if(filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }



    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={taskForTodolist}
                removeTask={removeTask}
                changeFilter = {changeFilter}
            />
        </div>
    );
}

export default App;

