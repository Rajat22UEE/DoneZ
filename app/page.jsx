'use client'
import { useState } from 'react'
import TaskList from '@/components/TaskList'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() === '') return
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">My To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border px-4 py-2 rounded-md w-64"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>

      <TaskList tasks={tasks} />
    </main>
  )
}
