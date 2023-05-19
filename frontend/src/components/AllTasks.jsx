import  axios  from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import TaskStructure from './TaskStructure'
import "../styles/alltasks.css"


const AllTasks = () => {

     const [taskSaved, setTaskSaved] = useState([])


   useEffect(() => { 
         axios.get("http://localhost:4000/getTasks")
              .then((res) => { 
                setTaskSaved(res.data)
              })
              .catch(err => console.log(err))
              
    }, [])

  return (
    <div className='c'>
       
        {taskSaved.map((t) => <TaskStructure  task={t}/>)}
    
    </div>
  )
}

export default AllTasks