import React from 'react'


const StructureForTasks = ({tasks}) => {
  return (
    <div className='gral-gral'>
          <div>
         
             <div>
                  <div className='grall'>
                      <div className='contenedor-title'>
                            <h5 className='tituloo-task'>{tasks.title}</h5>
                      </div>
                     <hr />
                      <div className='cont-description'>
                           <p className='descrip-task'>{tasks.description}</p>
                      </div>
                      <hr />
                      <div className='cont-date-schedule'>
                            <p className='date-task'><b>Date:{tasks.date}</b></p>
                            <p className='schedule-task'><b>Schedule:{tasks.schedule}</b></p>
                      </div>

                      <div className='div-task-pen'>
                         <p className='task-pendent'>Pending Task</p>
                      </div>
                  </div>
             </div>

           </div>
    </div>
  )
}

export default StructureForTasks
