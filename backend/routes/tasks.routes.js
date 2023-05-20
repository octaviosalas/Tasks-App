import express  from "express";
const tasksRoutes = express.Router()
import {saveTaskInDb, showingTasksInDb, deleteTaskInDb, updateTaskInDb} from "../controllers/task.controllers.js"

tasksRoutes.post("/saveNewTask", saveTaskInDb)

tasksRoutes.get("/getTasks/:userId", showingTasksInDb)

//tasksRoutes.post("/searchSpecificTask", searchById)

//tasksRoutes.post("/modifiedTask", editTask)

tasksRoutes.post("/deleteTask", deleteTaskInDb)

tasksRoutes.put("/updateTask", updateTaskInDb)

export default tasksRoutes