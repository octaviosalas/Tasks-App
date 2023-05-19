import mongoose from "mongoose";


const taskSchema = mongoose.Schema( { 
    title: { 
        type: String
    }, 
    description: { 
        type: String
    }, 
    date: { 
        type: Date
    }, 
    schedule: { 
        type: String,
    }, 
    done: { 
        type: Boolean,
        default: false
    },
    idtask: { 
        type: String,
        required: true
    },
    iduser: { 
        type: String,
        required: true
    }


})

const Task = mongoose.model("Tasks", taskSchema)

export default Task;
