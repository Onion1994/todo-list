import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        addTodo(text)
        setText('')
    }

return (
    <form className='todo-form' onSubmit={handleSumbit}>
        <input 
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add Task</button>
    </form>
)
}
