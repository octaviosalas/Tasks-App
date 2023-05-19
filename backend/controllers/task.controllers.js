import Task from "../models/tasks.js"


export const saveTaskInDb = async (req, res) => { 
 
    const {title, description, date, schedule, idtask, iduser} = req.body;
  
    try { 
       const newTask = new Task ({title, description, date, schedule, idtask, iduser})
       await newTask.save()
       res.send("Tarea almacenada en la base de datossss")
       console.log(req.body)
    } catch(err) { 
      console.log(err)
      res.send("Hay errores. La tarea no puede ser guardadaaaaa")
    }
  } 


  export const showingTasksInDb = async (req, res) => { 
    try {
      const docs = await Task.find({})
       res.send(docs)
       console.log(docs) 
    } catch (err) {
        res.send(err)
        console.log("Hay errores para obtener las tareas", err)
    }

}  






export const deleteTaskInDb =  async (req, res) => { 
   
  try {
    await Task.findOneAndDelete({idtask: req.body.idtask})
    res.send("Tarea Eliminada")
  } catch (error) {
     res.send(error)
     
  }

}

///findOneAndUpdate se usa cuando queres actualizar/modificar/eliminar una sola cosa
export const updateTaskInDb = async (req, res) => { 
   try {
       await Task.findOneAndUpdate({idtask: req.body.idtask}, { 
         done: true
       })
       res.send("Tarea Actualizada como Finalizada en la Base de Datos")
   } catch (err) {
      res.send(err)
   }
}