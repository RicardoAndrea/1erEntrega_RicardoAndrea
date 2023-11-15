import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'

function App() {
  return (
    
      <div className='App'>
        <NavBar/>
        <intemListContainer Title= 'Producto 1' Price={100} img src='./imagenes/Banco Colón con respaldo.jpeg' alt='banco respaldo'>
          <p>Aproveche este art</p>
          <button>compre ya</button>
        </intemListContainer>
        <intemListContainer Title= 'Producto 2' Price={100} img=''>
          <p>Aproveche este art</p>
          <button>compre ya</button>
        </intemListContainer>
        <intemListContainer Title= 'Producto 3' Price={100} img=''>
          <p>Aproveche este art</p>
          <button>compre ya</button>
        </intemListContainer>

      </div>
      
  
  )
}

export default App
