import { useState } from 'react'
import './App.css'
import TaskList from './Components/TaskList'
import { TaskForm } from './Components/TaskForm'
import { useTask } from './Hooks/useTask'

function App() {
  const {
    tareas,
    tareasContador,
    tareaspendientesContador,
    handleNuevaTarea,
    handleBorrarTarea,
    handleCompletarTarea,
    handleActualizarTarea
  } = useTask();
  return (
    <>
      <div className="card-tareas container-fluid ">
        <div className="row justify-content-center align-items-center">
          <h1>Lista de Tareas</h1>
        </div>
        <div className=" row justify-content-center align-items-center counter-tareas">
          <div className="col-md-6">
            <h2>Cantidad de Tareas: {tareasContador}</h2>
          </div>
          <div className="col-md-6">
            <h2>Tareas Pendientes: {tareaspendientesContador}</h2>
          </div>
        </div>
        <div className="agregar-tarea">
          <h3>Agregar Nueva
            Tarea</h3>
          <TaskForm handleNuevaTarea={handleNuevaTarea} />
        </div>
        <TaskList tareas={tareas}
          handleActualizarTarea={handleActualizarTarea}
          handleBorrarTarea={handleBorrarTarea}
          handleCompletarTarea={handleCompletarTarea} />
      </div>
    </>
  )
}

export default App
