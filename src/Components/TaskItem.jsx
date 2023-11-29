import React from 'react'
import { TaskRefresh } from './TaskRefresh';
//Se importa icono de react icon
import { TiDeleteOutline } from "react-icons/ti";

export const TaskItem = () => {
    return (
        <>
        <li>
            <span>
                <label htmlFor="" className='container-done'></label>
            </span>
            <TaskRefresh/>
            <button className="btn-delete">
                <TiDeleteOutline />
            </button>
        </li>
        </>
    )
}
