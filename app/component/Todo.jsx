"use client"

import React, { useEffect, useState } from 'react'
import "./todo.css"
const Todo = () => {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json()
            setTodo(data)
            
        }
        fetchData()
    }, [])
    
    console.log(todo)
    
    return (
        <div className='todo' > 
            <h1>client component</h1>
            <h2>{todo.title}</h2> 
        </div>
    )
}
export default Todo