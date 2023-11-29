import React from 'react'

export const TodoAdd = () => {
    return (
        <>
            <form action="">
                <input type="text" className='input-add' name="description" value="Aprender" placeholder='¿Que necesitas hacer?'/>
                <button className='btn-add' type='submit'>Agregar</button>
            </form>
        </>
    )
}
