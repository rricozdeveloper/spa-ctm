import ctmLogo from '/logoCTM.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ctmLogo} className="logo" alt="ctm logo" />
        </a>
        
      </div>
      <h1>UNIVERSIDAD DE CARTAGENA | Centro Tutorial de Mompox</h1>
      
      <p className="read-the-docs">
        Proyecto en desarrollo SPA del CTM - Universidad de Cartagena
      </p>
      <p>Desarrolladores: </p>
      <p> Backend:<br></br> Leidy Nuñez, Daniel Ospino, Juan Camilo Martínez, </p>
      <p> Frontend : <br></br> Jhon López ,Kenny Rodríguez, Ricardo Rico, Santiago Malagón, Yasedis Gómez, , Yorleis Arias </p>
    </>
  )
}

export default App
