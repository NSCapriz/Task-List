import React from 'react'
//Se importa los custom hook creados
import { useForm } from '../Hooks/useForm'
import { useTask } from '../Hooks/useTask'
//Se importa sweetAlert
import Swal from 'sweetalert2'

export const TaskForm = () => { //Se pasa función como una prop al componente
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    //Obtén handleNuevaTarea desde useTask
    const { handleNuevaTarea } = useTask();

    const onFormSubmit = e => {
        e.preventDefault();

        if (description.length <= 1) return; //Se crea condicional para que no se suba algo vacio

        let nuevaTarea = {
            id: new Date().getTime(), //Se crea un objeto con un id creado en base a la hora usando el metodo getTime, la descripción del formulario y un estado done con un booleano false por defecto.
            description: description,
            done: false,
        };

        Swal.fire('Has agregado una nueva tarea a tu lista de tareas!', 'Presiona F5 para guardar tus cambios')
        Swal.update({
            icon: 'success'
        })
        handleNuevaTarea(nuevaTarea);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' className='input-agregar' name='description' value={description} onChange={onInputChange} placeholder='¿Que debes hacer?' />

            <button className='btn-agregar' type='submit'>
                Nueva Tarea
            </button>
        </form>
    );
};
