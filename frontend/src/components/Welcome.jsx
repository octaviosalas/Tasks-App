import React, { useEffect, useState } from 'react'
import {useParams} from "react-router"
import axios from "axios"
import Navbar from './NavBar'
import "../styles/welcome.css"
import CreateTask from './CreateTask'

const Welcome = () => {

  const {id} = useParams()
  const [name, setName] = useState("")

  useEffect(() => { 
       axios.get(`http://localhost:4000/user/${id}`)
            .then(({data}) => {                      //la res de mi promesa, esta en {json} y accedo con "data" ya que mi controlador me devuelve una respuesta en json. La cual contiene un objeto json con datos.
               setName(data.name)
            })
            .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Navbar userid={id}/>
        <div className='div-main-welcome'>
            <p className='welcome-p'>Bienvenido! {name}</p> 
        </div>
        
    
    </div>
  )
}

export default Welcome
