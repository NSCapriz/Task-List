import { useState } from 'react'
import './App.css'
import TaskList from './Components/TaskList'
import { TaskForm } from './Components/TaskForm'

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
            <TaskForm/>
          </div>
        <TaskList/>
      </div>
    </>
  )
}

export default App
