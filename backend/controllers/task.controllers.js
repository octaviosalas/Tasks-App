import Task from "../models/tasks.js"
import mongoose from "mongoose"


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
    const { userId } = req.params;
    try {
      const docs = await Task.find({ iduser: userId });
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




export const searchById = async (req, res) => { 
  try {
     const taskSearch = await Task.find({idtask: req.body.idtask})
     res.send(taskSearch)
  } catch (error) {
    res.send(error)
  }
}


export const editTask = async (req, res) => { 
  try {
    console.log("Holaa");
    console.log(req.body);
    await Task.findOneAndUpdate({ idtask: req.body.idtask }, { 
      title: req.body.title,
      description: req.body.description,
      schedule: req.body.schedule,
      iduser: req.body.iduser
    })
     res.status(200).send("Tarea editada correctamente!");
  } catch (error) {
     res.status(500).send(error);
  }
}

/*
export const editTask = async (req, res) => { 
    try {
       await Task.findByIdAndUpdate({idtask: req.body.idtask}, { 
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        schedule: req.body.schedule
       })
       res.send("Tarea editada")
    } catch (error) {
       res.send(error)
    }
} */