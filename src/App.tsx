import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'
function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<FilterValueType>('all')

    function removeTask(id: string) {
        let task = tasks.filter(t => t.id !== id)
        setTasks(task)
    }
    function addTask(newTitle: string) {
        let task = {id:v1(), title: newTitle, isDone: false}
        setTasks([task, ...tasks])
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
                addTask={addTask}
                removeTask={removeTask}
                changeFilter = {changeFilter}
            />
        </div>
    );
}

export default App;

