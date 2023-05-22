import  axios  from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import TaskStructure from './TaskStructure'
import "../styles/alltasks.css"
import { useContext } from 'react'
import { UserContext } from  '../store/user-context.js';
import Navbar from './NavBar'


const AllTasks = () => {

     const [taskSaved, setTaskSaved] = useState([])
     const userContext = useContext(UserContext)
     const idContextUser = userContext.userId
    

   useEffect(() => { 
         axios.get(`http://localhost:4000/getTasks/${idContextUser}`)
              .then((res) => { 
                setTaskSaved(res.data)
              })
              .catch(err => console.log(err))
              
    }, [])

    useEffect(() => { 
       console.log(userContext.userId)
    }, [])

  return (

    <div>

      <Navbar />
           <div className='c'>
       
       {taskSaved.map((t) => <TaskStructure  task={t}/>)}
   
          </div>
    </div>
 
  )
}

export default AllTasks