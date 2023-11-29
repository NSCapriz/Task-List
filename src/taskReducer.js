export const taskReducer = (initialState, action) => {
	// Se utiliza un switch para el manejo de las diferentes acciones requeridas para la lista
	switch (action.type) {
		case 'Agregar Tarea': //Se genera una copia del initialState pero con una tarea nueva agregada al final
			return [...initialState, action.payload];

		case 'Borrar Tarea': //Se genera una copia del initialState pero borrando la tarea de acuerdo a un id, ubicado mediante el metodo filter
			return initialState.filter(tarea => tarea.id !== action.payload);

		case 'Tarea Completa': //Se genera una copia del initialState pero modificando el estado de la tarea de acuerdo a un id.
			return initialState.map(tarea => {
				if (tarea.id === action.payload) {
					return {
						...tarea,
						done: !tarea.done,
					};
				}

				return tarea;
			});

		case 'Actualizar Tarea': //Se genera una copia del initialState  pero actualizando su descripción, de acuedo al id asignado
			return initialState.map(tarea => {
				if (tarea.id === action.payload.id) {
					return {
						...tarea,
						description: action.payload.description,
					};
				}

				return tarea;
			});

		default:
			return initialState; //Si no se da niguno de los casos del switch, devuelve el initialState sin cambios
	}
};