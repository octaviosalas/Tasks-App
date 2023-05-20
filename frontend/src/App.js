import {Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "./styles/app.css"
import CreateTask from "./components/CreateTask";
import PendingTasks from "./components/PendingTasks";
import AllTasks from "./components/AllTasks";
import FinishedTasks from "./components/FinishedTasks";
import { UserProvider } from './store/user-context.js';

function App() {
  return (
    <div className="container">

     <UserProvider>

              <Routes>
                  <Route path='/' element={<Register/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/welcome/:id' element={<Welcome/>}></Route> 
                  <Route path="/pendingTasks/:userId" element={<PendingTasks />}></Route>     
                  <Route path="/getTasks/:userId" element={<AllTasks />}></Route>    
                  <Route path="/finishedTasks/:userId" element={<FinishedTasks />}></Route>  
                  <Route path='/createTask/:userid' element={<CreateTask/>}></Route>
              </Routes>

       </UserProvider>

              
    </div>

    
  );
}

export default App;
