import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [equipos, setEquipos] = useState([])

  async function leerEquipos() {
    const ruta = "https://apichampions-rc51.onrender.com/api/equipos"
    const equiposJson = await fetch(ruta)
    const equipos = await equiposJson.json()
    setEquipos(equipos.equipos)
  }

  useEffect(() => {
    leerEquipos()
  }, [])

  return (
    <div>
      <h1>EQUIPOS</h1>
      {equipos && equipos.map((equipo) => (
        <p>{equipo.nombre}</p>
      ))}
    </div>
  )
}

export default App
