import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../styles/register.css"
import pngemail from "../img/email.png"
import pngpassword from "../img/password.png"
import pngname from "../img/name.png"

const Register = () => {

    const navigate = useNavigate()

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
    
      function tryToLogin () { 
        
       
        const newUserToBeRegistered = { 
            name: name,
            email: email, 
            password: password
        }
         axios.post("http://localhost:4000/register", newUserToBeRegistered)
               .then((res) => console.log(res.data))
               .catch(err => console.log(err))
    }
      
        
  return (

        <>
          <div className="formContainer">

            <h3>Bienvenido a la pagina</h3>
            <h2>De Registro!</h2>

            <form >

              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="nombre">Nombre</label>
                  <input name="nombre" id="nombre" type="text" placeholder="Nombre..." autoComplete="off" value={name} onChange={(e) => setName(e.target.value) }/>
                </div>
                  <img src={pngname} alt="" />
              </div>

    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="correo">Correo</label>
                  <input name="correo" id="correo" type="email" placeholder="Correo..."  autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <img src={pngemail} alt="" />
              </div>


    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="contraseña">Contraseña</label>
                  <input name="contraseña" id="contraseña" type="password" placeholder="Contraseña..." autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                 <img src={pngpassword} alt="" />
              </div>


    
              <button  onClick={() => tryToLogin()}> Registrarme</button>

              <p>
                Ya tienes una cuenta?{" "}
                <b onClick={() => navigate("/login")}>Inicia Sesión!</b>
              </p>

            </form> 
            
          </div>
         
        </>
      );

}  

export default Register
