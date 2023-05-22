import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../styles/edittask.css"
import { useContext } from 'react'
import { UserContext } from  '../store/user-context.js';
import Navbar from './NavBar'

const EditTask = () => {

    const params = useParams()
    const formRef = useRef(null);
 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [schedule, setSchedule] = useState("")


    const userContext = useContext(UserContext)
    const userid = userContext.userId


  

    useEffect(() => { 
          axios.post("http://localhost:4000/searchSpecificTask", {idtask: params.idtask}).then((res) => { 
                  const resDocs = res.data[0]
                  setTitle(resDocs.title)
                  setDescription(resDocs.description)
                  setSchedule(resDocs.schedule)
               })
               .catch(err => console.log(err))
    },  [params.idtask])


  

    function saveEdited() { 
        const taskEdited = { 
           title: title,
           description: description,
           schedule: schedule,
           idtask: params.idtask,
           iduser: userid
        }
        
        console.log(taskEdited)
        axios.post("http://localhost:4000/modifiedTask", taskEdited)
             .then((res) => { 
                console.log(res);
                setTimeout(() => { 
                    setTitle(taskEdited.title);
                    setDescription(taskEdited.description);
                    setSchedule(taskEdited.schedule);
                }, 1000)
             } )
             .catch((err) => console.log(err))  
     }
 
 

  return (
    <div>

    <div>
        <Navbar/>
    </div>
      <div className='a-div'>

     <form action=""  >
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
                
                    <input type="time" placeholder='Horario' className='inpt' value={schedule} onChange={(e) => setSchedule(e.target.value)}/>
            </div>

              <br />

            <div className='iter-div'>
                    <button className='btn-save' onClick={() => saveEdited()} > Guardar Cambios </button>   
            </div>
      </div>
    </form>
</div>

</div>
  )
}

export default EditTask
