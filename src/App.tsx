import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    id: string
    title: string
    filter: FilterPropsType
}
export type FilterPropsType = 'all' | 'active' | 'completed'

function App() {
    const todolist1 = v1()
    const todolist2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolist1, title: 'What to learn', filter: 'all'},
        {id: todolist2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState({
        [todolist1]: [
            {id: v1(), title: 'HTML&CSS', isDone: false},
            {id: v1(), title: 'JavaScript', isDone: false},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false}
        ],
        [todolist2]: [
            {id: v1(), title: 'Milk', isDone: false},
            {id: v1(), title: 'Book', isDone: false},
            {id: v1(), title: 'Cookie', isDone: false},
        ]

    })
function addTodolist(title: string) {
        const newTodolistId = v1()
        const newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'}
    setTodolists([newTodolist, ...todolists])
    setTasks({[newTodolistId]: [], ...tasks})
}
    function addTask(title: string, todolistId: string) {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }
    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let task = tasks[todolistId]
        let taskStatus = task.find(el => el.id === taskId)
        if (taskStatus) {
            taskStatus.isDone = isDone
            setTasks({...tasks})
        }
    }
    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }
    function changeTodolistTitle(todolistId: string, newTitle: string) {
        const todolist = todolists.find(tl => tl.id === todolistId)
        if(todolist) {
            todolist.title = newTitle
            setTodolists([...todolists])
        }
    }
    function removeTask(taskId: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }
    function changeFilter(value: FilterPropsType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }
    function changeTasksTitle (taskId: string, newValue: string, todolistId: string) {
        let task = tasks[todolistId]
       let taskTitle = task.find(el => el.id === taskId)
        if(taskTitle) {
            taskTitle.title = newValue
            setTasks({...tasks})
        }
    }


    return (
        <div className="App">
            <div className={'app-addItemForm'}>
                <AddItemForm callback={addTodolist}/>
            </div>

            {
                todolists.map((tl) => {

                    let taskForTodolist = tasks[tl.id]
                    if (tl.filter === 'active') {
                        taskForTodolist = taskForTodolist.filter(el => !el.isDone)
                    }
                    if (tl.filter === 'completed') {
                        taskForTodolist = taskForTodolist.filter(el => el.isDone)
                    }

                    return (
                        <div className={'todolist'}>
                            <Todolist
                                key={tl.id}
                                id={tl.id}
                                title={tl.title}
                                addTask={addTask}
                                filter={tl.filter}
                                tasks={taskForTodolist}
                                removeTask={removeTask}
                                removeTodolist={removeTodolist}
                                changeTodolistTitle={changeTodolistTitle}
                                changeStatus={changeStatus}
                                changeFilter={changeFilter}
                                changeTasksTitle={changeTasksTitle}
                            />
                        </div>

                    )
                })}

        </div>
    );
}

export default App;
