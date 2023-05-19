import React from 'react'
import "../styles/navbar.css"
import logo from "../img/logotarea.png"
import { Link } from 'react-router-dom'

const Navbar = ({userid}) => {
  return (
    <div className='conteiner-gral-nav'>
          <div className='conteiner-nav'>
            <div className='cont-pb'>
                <Link to={"/allTasks"}><b><p className='my-tasks' title='Ver mis Tareas'>My Tasks</p></b></Link>
                <Link to={"/pendingTasks"}><b><p className='my-pendt' title='Ver mis Pendientes'>Pending Tasks</p></b></Link>
                <Link to={"/finishedTasks"}><b><p className='my-finish' title='Ver mis Terminadas'>Finished Tasks</p></b></Link> 
            </div>
                <Link to={`/createTask/${userid}`}><img src={logo} alt="" title="Crear Tarea" className='img-logo' /></Link>
          </div>
    </div>
  )
}

export default Navbar