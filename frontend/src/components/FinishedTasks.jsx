import React, { useEffect, useState } from 'react'
import axios from "axios"
import TaskStructure from './TaskStructure'
import { useContext } from 'react'
import { UserContext } from  '../store/user-context.js';
import "../styles/finished.css"
import Navbar from './NavBar';

const FinishedTasks = () => {

   const [TaskFinished, setTaskFinished] = useState([])
   const userContext = useContext(UserContext)
   const idContextUser = userContext.userId

     useEffect(() => { 
        axios.get(`http://localhost:4000/getTasks/${idContextUser}`)
             .then((res) => { 
                const docs = res.data
                const taskToBeFinished = docs.filter(taskToFin => taskToFin.done === true)
                setTaskFinished(taskToBeFinished)
             })
     }, [])

  return (

    <div>

      <Navbar />
     <div className='d'>
         {TaskFinished.map((t) => <TaskStructure task={t}/>)}
       </div>
    </div>

  
  )
}

export default FinishedTasks
