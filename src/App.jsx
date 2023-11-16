import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import bancoColon from './imagenes/Banco Colón con respaldo.jpeg'
import bancoDeck from './imagenes/Banco Deck en esquina con respaldo.jpeg'
import bCascada from './imagenes/Bebedero Cascada.jpeg'

function App() {
  return (
    
      <div className='App colorFondo'>
        <NavBar/>
        <ItemListContainer title= 'Producto 1' price={100} img={bancoColon} alt="Banco Colon"/>
        <p>Super Cómodo</p> 
        <ItemListContainer title= 'Producto 2' price={300} img={bancoDeck} alt="Banco Deck"/>
        <p>Pa' la Barra de Amigos</p> 
        <ItemListContainer title= 'Producto 3' price={500} img={bCascada} alt="Bebedero Cascada"/>
        <p>Pa' tirar agua</p> 
      
      
      </div>    
   
  )
}

export default App
