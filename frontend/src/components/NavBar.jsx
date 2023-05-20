import React from 'react'
import "../styles/navbar.css"
import logo from "../img/logotarea.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from  '../store/user-context.js';
import { useEffect, useState } from 'react'

const Navbar = () => {

  const userContext = useContext(UserContext);
  const [userId, setUserId] = useState(userContext.userId);

  useEffect(() => {
    setUserId(userContext.userId);
  }, [userContext.userId]);

  console.log(userId);


  return (
    <div className='conteiner-gral-nav'>
          <div className='conteiner-nav'>
            <div className='cont-pb'>
                <Link to={`/welcome/${userId}`}><b><p className='my-tasks' id='inicio' title='Inicio'>Inicio</p></b></Link>
                <Link to={`/getTasks/${userId}`}><b><p className='my-tasks' title='Ver mis Tareas'>My Tasks</p></b></Link>
                <Link to={`/pendingTasks/${userId}`}><b><p className='my-pendt' title='Ver mis Pendientes'>Pending Tasks</p></b></Link>
                <Link to={`/finishedTasks/${userId}`}><b><p className='my-finish' title='Ver mis Terminadas'>Finished Tasks</p></b></Link> 
            </div>
                <Link to={`/createTask/${userId}`}><img src={logo} alt="" title="Crear Tarea" className='img-logo' /></Link>
          </div>
    </div>
  )
}

export default Navbar