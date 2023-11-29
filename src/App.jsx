import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Components/TodoList'
import { TodoAdd } from './Components/TodoAdd'

function App() {

  return (
    <>
      <div className="card-to-do">
          <h1>Lista de Tareas</h1>
          <div className="counter-todos">
            <h3>Cantidad de Tareas:</h3>
            <h3>Tareas Pendientes:</h3>
          </div>
          <div className="add-todo">
            <h3>Agregar Tarea</h3>
            <TodoAdd/>
          </div>
        <TodoList/>
      </div>
    </>
  )
}

export default App
