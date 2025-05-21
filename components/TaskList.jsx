'use client'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function TaskList({ tasks, onRemove, onToggleDone, onReorder }) {
  const handleDragEnd = (result) => {
    if (!result.destination) return

    const reordered = Array.from(tasks)
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)

    onReorder(reordered)
  }

  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 mt-10 text-center text-lg italic">
        🎉 No tasks yet. Add one to get started!
      </p>
    )
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <div
            className="space-y-4 w-full max-w-md"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                {(provided) => (
                  <div
                    className={`flex justify-between items-center p-4 rounded-xl transition-shadow border shadow-sm hover:shadow-md ${
                      task.done
                        ? 'bg-green-100 border-green-300 text-green-700 line-through'
                        : 'bg-white border-gray-200 text-gray-800'
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span className="flex-1 font-medium">{task.text}</span>

                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => onToggleDone(task.id)}
                        className={`text-xs px-3 py-1 rounded font-semibold transition ${
                          task.done
                            ? 'bg-white border border-green-400 text-green-500 hover:bg-green-50'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        {task.done ? 'Undone' : 'Done'}
                      </button>

                      <button
                        onClick={() => onRemove(task.id)}
                        className="text-xs px-3 py-1 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
