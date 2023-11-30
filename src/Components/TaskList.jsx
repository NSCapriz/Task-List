import React from 'react'
import { TaskItem } from './TaskItem'

const TaskList = ({
    tareas,
    handleBorrarTarea,
    handleCompletarTarea,
    handleActualizarTarea
}) => {
    return (
        <>
            <ul>
                {tareas.map(tarea => (
                    <TaskItem
                        key={tarea.id}
                        tarea={tarea}
                        handleActualizarTarea={handleActualizarTarea}
                        handleCompletarTarea={handleCompletarTarea}
                        handleBorrarTarea={handleBorrarTarea}
                    />
                ))}
            </ul>
        </>
    )
}

export default TaskList