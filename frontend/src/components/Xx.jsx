import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/register.css"
import email from "../img/email.png"
import password from "../img/password.png"
import name from "../img/name.png"

const Xx = () => {

  const navigate = useNavigate()


  return (


        <>
          <div className="formContainer">

            <h3>Bienvenido a la pagina</h3>
            <h2>De Registro!</h2>

            <form >

              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="nombre">Nombre</label>
                  <input
    
                    name="nombre"
                    id="nombre"
                    type="text"
                    placeholder="Nombre..."
                    autoComplete="off"
                  />
                </div>
                  <img src={name} alt="" />
              </div>

    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="correo">Correo</label>
                  <input
                
             
                    name="correo"
                    id="correo"
                    type="email"
                    placeholder="Correo..."
                    autoComplete="off"
                  />
                </div>
                <img src={email} alt="" />
              </div>


    
              <div className="inputContainer">
                <div className="left">
                  <label htmlFor="contraseña">Contraseña</label>
                  <input
                
                    name="contraseña"
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña..."
                    autoComplete="off"
                  />
                </div>
                 <img src={password} alt="" />
              </div>


    
              <button type="submit">
               Registrarme
              </button>

              <p>
                Ya tienes una cuenta?{" "}
                <b onClick={() => navigate("/login")}>Inicia Sesión!</b>
              </p>

            </form> 
            
          </div>
         
        </>
      );
}

export default Xx
