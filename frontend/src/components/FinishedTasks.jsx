import React, { useEffect, useState } from 'react'
import axios from "axios"
import TaskStructure from './TaskStructure'

const FinishedTasks = () => {

   const [TaskFinished, setTaskFinished] = useState([])

     useEffect(() => { 
        axios.get("http://localhost:4000/getTasks")
             .then((res) => { 
                const docs = res.data
                const taskToBeFinished = docs.filter(taskToFin => taskToFin.done === true)
                setTaskFinished(taskToBeFinished)
             })
     }, [])

  return (
    <div>
         {TaskFinished.map((t) => <TaskStructure task={t}/>)}
    </div>
  )
}

export default FinishedTasks
