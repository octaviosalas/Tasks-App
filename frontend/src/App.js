import {Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "./styles/app.css"

function App() {
  return (
    <div className="container">

              <Routes>
                  <Route path='/' element={<Register/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/welcome/:id' element={<Welcome/>}></Route>      
              </Routes>


              
    </div>
  );
}

export default App;
