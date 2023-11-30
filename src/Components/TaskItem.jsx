import React from 'react'
import { TaskRefresh } from './TaskRefresh';
//Se importa icono de react icon
import { TiDeleteOutline } from "react-icons/ti";

export const TaskItem = ({
    tarea,
    handleBorrarTarea,
    handleCompletarTarea,
    handleActualizarTarea
}) => {
    return (
        <>
            <li>
                <span onClick={() => handleCompletarTarea(tarea.id)}>
                    <label
                        className={`container-done ${tarea.done ? 'active' : ''}`}
                    ></label>
                </span>
                <TaskRefresh tarea={tarea} handleActualizarTarea={handleActualizarTarea} />
                <button
                    className='btn-delete'
                    onClick={() => handleBorrarTarea(tarea.id)}
                >
                    <TiDeleteOutline />
                </button>
            </li>
        </>
    )
}
