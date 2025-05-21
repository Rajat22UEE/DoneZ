'use client'

export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">📘 React Tutorial: Dynamic Lists & Conditional UI</h1>

        {/* LEARN SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">🧠 What You’ll Learn</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>How to render dynamic lists with <code className="bg-blue-100 px-1 rounded">.map()</code></li>
            <li>Why the <code className="bg-blue-100 px-1 rounded">key</code> prop is important for rendering performance</li>
            <li>How to conditionally render elements using <code className="bg-blue-100 px-1 rounded">? : </code> and <code className="bg-blue-100 px-1 rounded">&&</code></li>
          </ul>
        </section>

        {/* RESOURCES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">🔗 Resources</h2>
          <ul className="list-disc list-inside text-lg text-purple-700 space-y-1">
            <li>
              <a href="https://reactjs.org/docs/lists-and-keys.html" target="_blank" className="underline hover:text-purple-900">
                React Docs: Rendering Lists
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/results?search_query=react+lists+and+keys" target="_blank" className="underline hover:text-purple-900">
                YouTube: React Lists and Keys
              </a>
            </li>
          </ul>
        </section>

        {/* TASK */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">✅ Task: Build a To-Do App</h2>
          <div className="bg-white border border-green-200 rounded-xl p-5 shadow-md space-y-3 text-lg">
            <p>Let’s create a basic to-do list using the concepts above.</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Add tasks using an input field</li>
              <li>Render tasks dynamically using <code>.map()</code></li>
              <li>Use <code>key</code> prop for each task</li>
              <li>Show a message like <em>"No tasks yet"</em> if the list is empty</li>
              <li>Style the app using Tailwind CSS</li>
            </ul>
          </div>
        </section>

        {/* EXAMPLE CODE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">🧪 Example Code</h2>
          <div className="bg-gray-900 text-white rounded-xl p-4 overflow-auto text-sm shadow-lg">
            <pre>
{`const [tasks, setTasks] = useState([])

return (
  <div>
    {tasks.length === 0 ? (
      <p>No tasks yet</p>
    ) : (
      tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))
    )}
  </div>
)`}
            </pre>
          </div>
        </section>

        {/* TIPS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-600">💡 Pro Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Always use a unique <code>key</code> (like an ID or index) when mapping items.</li>
            <li>Use ternary operators or logical <code>&&</code> for simple UI conditions.</li>
            <li>Tailwind helps create great UIs fast with utility classes.</li>
          </ul>
        </section>

        {/* END */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          Happy coding! 🚀
        </footer>
      </div>
    </main>
  )
}
