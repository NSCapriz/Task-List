import { useEffect, useReducer } from 'react';
import { taskReducer } from '../taskReducer';
import Swal from 'sweetalert2'

export const useTask = () => {
	const initialState = []; //Se define el initialState como un array vacio

    //Se crea una función init para que devuelva las tareas almacenadas en el localStorage o bien un array vacío si no hay tareas 
    const init = () => {
        return JSON.parse(localStorage.getItem('tareas')) || []
    } 
    
    //Se utiliza el hook useReducer para manejar el estado de la lista de tareas
	const [tareas, dispatch] = useReducer(
		taskReducer,
		initialState,
		init
	);

    const tareasContador = tareas.length //Se crea un contador de tareas
    const tareaspendientesContador = tareas.filter(tarea => !tarea.done).length //Se usa el metodo filter y la función lenght para calcular las tareas aun pendientes

    //Se hace uso del useEffect para implementar la persistencia de datos utilizando el localStorage a fin que las tareas persistan después de recargar la página
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])


	const handleNuevaTarea = tarea => {
		const action = {
			type: 'Agregar Tarea',
			payload: tarea,
		};

		dispatch(action);
	};

	const handleBorrarTarea = id => {
		const action = {
			type: 'Borrar Tarea',
			payload: id,
		};
		Swal.fire('Acabas de borrar una tarea de tu lista!', 'Recuerda presionar F5 para guardar los cambios');
		Swal.update({
			icon: 'warning'
		})
		dispatch(action);
	};

	const handleCompletarTarea = id => {
		const action = {
			type: 'Tarea Completa',
			payload: id,
		};
		Swal.fire('Has completado una Tarea!', 'Recuerda presionar F5 para guardar tus cambios')
        Swal.update({
            icon: 'success'
        })
		dispatch(action);
	};

	const handleActualizarTarea = (id, description) => {
		const action = {
			type: 'Actualizar Tarea',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    return{ // Se devuelve un objeto con el estado de las tareas, el número de tareas y el de tareas pendientes, y las funciones para manejar las acciones de las tareas.
        tareas,
        tareasContador,
        tareaspendientesContador,
        handleNuevaTarea,
        handleBorrarTarea,
        handleCompletarTarea,
        handleActualizarTarea
    }
};