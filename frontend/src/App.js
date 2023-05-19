import {Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "./styles/app.css"
import CreateTask from "./components/CreateTask";
import PendingTasks from "./components/PendingTasks";
import AllTasks from "./components/AllTasks";
import FinishedTasks from "./components/FinishedTasks";

function App() {
  return (
    <div className="container">

    

              <Routes>
                  <Route path='/' element={<Register/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/welcome/:id' element={<Welcome/>}></Route> 
                  <Route path="/pendingTasks" element={<PendingTasks />}></Route>     
                  <Route path="/allTasks" element={<AllTasks />}></Route>    
                  <Route path="/finishedTasks" element={<FinishedTasks />}></Route>  
                  <Route path='/createTask/:userid' element={<CreateTask/>}></Route>
              </Routes>


              
    </div>
  );
}

export default App;
