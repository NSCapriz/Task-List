import React from 'react'
import { CiEdit } from "react-icons/ci";

export const TodoUpdate = () => {
    return (
        <>
            <form action="">
                <input type="text" className='input-update' name="description" value="Aprender" placeholder='¿Que necesitas hacer?'/>
                <button className='btn-edit' type='submit'><CiEdit /></button>
            </form>
        </>
    )
}
