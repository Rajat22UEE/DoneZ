export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet. Add one!</p>
  }

  return (
    <div className="grid gap-4 w-full max-w-md">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition"
        >
          {task}
        </div>
      ))}
    </div>
  )
}
