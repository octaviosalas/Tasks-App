import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import ok from "../img/ok.png"
import Navbar from './NavBar'
import "../styles/taskstructure.css"

const TaskStructure = ({task}) => {

       const navigate = useNavigate()

       const deleteTask = (idtask) => { 
            axios.post("http://localhost:4000/deleteTask", {idtask: idtask})
                 .then(res => console.log(res.data), navigate(0))
                 .catch(err => console.log(err))
       }

       const updateToDone = (idtask) => { 
            axios.put("http://localhost:4000/updateTask", {idtask: idtask})
                 .then(res => console.log(res.data))
                 .catch(err => console.log(err))
       }

       const formatFecha = (fecha) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const date = new Date(fecha);
          return date.toLocaleDateString(undefined, options);
        };

      

  return (
    <div className='gral-gral'>

     <div>
          <Navbar />
     </div>
         <div className='gral'>
            <div className='contenedor-title'>
                 <h5 className='tituloo-task'>Title: {task.title}</h5>
            </div>
             <hr />
            <div className='cont-description'>
                <p className='descrip-task'>{task.description}</p>
            </div>
            <hr />
            <div className='cont-date-schedule'>
                <p className='date-task'><b>Fecha:</b> {formatFecha(task.date)}</p>
                <p className='schedule-task'><b>Horario:</b> {task.schedule}</p>
            </div>

            <div className='cont-delete-edit'> 
                <button className='btn-delete' onClick={() => deleteTask(task.idtask)}>Delete Task</button>
                <Link to={`/editar/${task.idtask}`}><button className='btn-edit'>Edit Task</button></Link> 
            </div>

            <div>
                  {task.done === false ? <button class="task-button" onClick={() => updateToDone(task.idtask)}>Mark Task as Complete</button> : <img src={ok} className='ok-img'></img>  }
            </div>
         </div>
    </div>
    
  )
}

export default TaskStructure