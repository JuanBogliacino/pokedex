import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <Link to='/pokedex'><h2>Pokedex React</h2></Link>
        <p>Juan Bogliacino</p>
        <ul>
            <a href="https://github.com/JuanBogliacino" target='_blank'><li>perfil de GitHub</li></a>
            <a href="https://www.linkedin.com/in/juan-bogliacino-369b3026a/" target='_blank'><li>perfil de Linkedin</li></a>
        </ul>
    </footer>
  )
}

export default Footer