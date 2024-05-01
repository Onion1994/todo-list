import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

export default function App () {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodo = {
            id: Math.random().toString(36).slice(2, 11),
            text: text
        }
        setTodos([...todos, newTodo])
    }
    
    const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
        <Header/>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}