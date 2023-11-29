import React from 'react'

export const TaskForm = () => {
    return (
        <>
            <form action="">
                <input type="text" className='input-add' name="description" value="Aprender" placeholder='¿Que necesitas recordar?'/>
                <button className='btn-add' type='submit'>Agregar</button>
            </form>
        </>
    )
}
