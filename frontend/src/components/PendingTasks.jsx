import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './NavBar'
import TaskStructure from './TaskStructure'
import "../styles/pending.css"
import { useContext } from 'react'
import { UserContext } from  '../store/user-context.js';


const PendingTasks = () => {

    const [taskToFinish, setTaskToFinish] = useState([])
    const userContext = useContext(UserContext)
    const idContextUser = userContext.userId
   
     useEffect(() => { 
       axios.get(`http://localhost:4000/getTasks/${idContextUser}`)
            .then((res) => { 
                 const docs = res.data
                 const taskPend = docs.filter(task => task.done === false)
                 console.log(taskPend)
                 setTaskToFinish(taskPend)
                })
            .catch(err => console.log(err))
     }, [])

  

  return (
    <div className='e'>

      
        <Navbar />
      

          {taskToFinish.map((task) => <TaskStructure task={task}/>)}
    </div>
  )
}

export default PendingTasks
