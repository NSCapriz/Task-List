import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = () => {
    return (
        <>
        <li>
            <span>
                <label htmlFor="" className='container-done'></label>
            </span>
            <TodoUpdate/>
            <button className="btn-delete">
                <TiDeleteOutline />
            </button>
        </li>
        </>
    )
}
