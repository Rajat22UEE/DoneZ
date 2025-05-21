'use client'
import { useState } from 'react'
import Link from 'next/link'
import TaskList from '../components/TaskList'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() === '') return
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }])
    setNewTask('')
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  const reorderTasks = (newTasks) => {
    setTasks(newTasks)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Heading with button */}
      <div className="flex items-center justify-between w-full max-w-md mb-6">
        <h1 className="text-4xl font-bold text-blue-600 drop-shadow">📝 To-Do List</h1>
        <Link
          href="/tutorial"
          className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-md shadow transition"
        >
          📘 Tutorial
        </Link>
      </div>

      {/* Input + Add Button */}
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none text-black"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>

      <div className='p-4 text-black font-bold'>
        <h1>
          You can drag and place task as per your priority
        </h1>
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onRemove={removeTask}
        onToggleDone={toggleDone}
        onReorder={reorderTasks}
      />
    </main>
  )
}
