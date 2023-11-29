export const todoReducer = (initalState, action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initalState, action.payload];
        case 'Delete Todo':
            return initalState.filter(todo => todo.id !== action.payload);
        case 'Complete Todo':
            return initalState.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                };

                return todo;
            })
        case 'Update Todo':
            

        default:
            return initalState;
    }
}