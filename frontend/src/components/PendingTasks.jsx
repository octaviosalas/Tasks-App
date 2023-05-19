import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StructureForTasks from './StructureForTasks'
import Navbar from './NavBar'
import TaskStructure from './TaskStructure'
import "../styles/pending.css"


const PendingTasks = () => {

    const [taskToFinish, setTaskToFinish] = useState([])
   
     useEffect(() => { 
       axios.get("http://localhost:4000/getTasks")
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
