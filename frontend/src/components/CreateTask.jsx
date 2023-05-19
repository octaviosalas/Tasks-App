import React, {useRef} from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import uniqid from "uniqid"
import "../styles/createtask.css"
import Navbar from './NavBar'


const CreateTask = () => {

    const formRef = useRef();  

    const [title, setTitle] = useState("") 
    const [description, setDescription] = useState("") 
    const [date, setDate] = useState("") 
    const [schedule, setSchedule] = useState("") 

    function saveTaskInDb() { 
       const taskToSave = { 
          title: title,
          description: description,
          date: date,
          schedule: schedule,
          idtask: uniqid()
       }
       axios.post("http://localhost:4000/saveNewTask", taskToSave)
            .then((res) => console.log(res.data), console.log("AAAAAAAAAAAA"), formRef.current.reset() )
            .catch((err) => console.log(err))
           
    }


  return (
    <div>

        <div>
            <Navbar />
        </div>
          <div className='a-div'>

         <form action="" ref={formRef}>
          <div className='b-div'>
                <div className='iter-div'> 
                    <label htmlFor="" className='title-form'>Titulo</label>
                   <br />
                    <input type="text" title="Escribe el titulo" className='inpt' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>


                <div className='iter-div'>
                    <label>Descripcion</label>
                    <br />
                    <textarea type="text" title="Escribe la tarea" className='text-area-inpt' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div className='iter-div'>
                        <input type="date" placeholder='Fecha' className='inpt' value={date} onChange={(e) => setDate(e.target.value)}/>
                    
                        <input type="time" placeholder='Horario' className='inpt' value={schedule} onChange={(e) => setSchedule(e.target.value)}/>
                </div>

                  <br />

                <div className='iter-div'>
                        <button className='btn-save' onClick={() => saveTaskInDb()}>Agrendar Tarea</button>
                        
                </div>
          </div>
        </form>
    </div>

    </div>
  )
}

export default CreateTask
