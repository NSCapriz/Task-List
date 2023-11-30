import React from 'react'
//Se importa icon de react icon
import { CiEdit } from "react-icons/ci";
//Se importa el custom hook creado
import { useForm } from '../Hooks/useForm';
import { useState, useRef } from 'react';

export const TaskRefresh = ({ tarea, handleActualizarTarea
}) => {

    const { actualizarTarea, onInputChange } = useForm({
        actualizarTarea: tarea.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = tarea.id;
        const description = actualizarTarea;

        handleActualizarTarea(id, description);

        setDisabled(!disabled);

        focusInputRef.current.focus();
    };

    return (
        <>
            <form onSubmit={onSubmitUpdate}>
                <input
                    type='text'
                    className={`input-update ${tarea.done ? 'text-decoration-dashed' : ''
                        }`}
                    name='actualizarTarea'
                    value={actualizarTarea}
                    onChange={onInputChange}
                    placeholder='¿Que debes hacer?'
                    readOnly={disabled}
                    ref={focusInputRef}
                />

                <button className='btn-edit' type='submit'>
                    <CiEdit />
                </button>
            </form>
        </>
    )
}
