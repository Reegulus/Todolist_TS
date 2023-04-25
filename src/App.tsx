import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

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

    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }

    function changeTodolistTitle(todolistId: string, newTitle: string) {
        const todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.title = newTitle
            setTodolists([...todolists])
        }
    }

    function addTask(title: string, todolistId: string) {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function removeTask(taskId: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let task = tasks[todolistId]
        let taskStatus = task.find(el => el.id === taskId)
        if (taskStatus) {
            taskStatus.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeFilter(value: FilterPropsType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    function changeTasksTitle(taskId: string, newValue: string, todolistId: string) {
        let task = tasks[todolistId]
        let taskTitle = task.find(el => el.id === taskId)
        if (taskTitle) {
            taskTitle.title = newValue
            setTasks({...tasks})
        }
    }


    return (
        <Container fixed>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                // aria-label="menu"
                                // sx={{ mr: 2 }}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Todolist
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid
                    style={{padding: '20px'}}
                    container>
                    <AddItemForm callback={addTodolist}/>
                </Grid>
                <Grid container spacing={10}>
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
                                <Grid item>
                                    <Paper
                                        style={{padding: '25px'}}
                                        elevation={3}
                                        variant={'elevation'}>
                                        <Todolist
                                            key={tl.id}
                                            id={tl.id}
                                            title={tl.title}
                                            addTask={addTask}
                                            filter={tl.filter}
                                            tasks={taskForTodolist}
                                            removeTask={removeTask}
                                            changeStatus={changeStatus}
                                            changeFilter={changeFilter}
                                            removeTodolist={removeTodolist}
                                            changeTasksTitle={changeTasksTitle}
                                            changeTodolistTitle={changeTodolistTitle}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
        </Container>
    );
}

export default App;
