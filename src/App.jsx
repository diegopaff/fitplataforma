import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Charlas from './pages/charlas/charlas'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './pages/login/Login'
import Prensa from './pages/prensa/Prensa'
import Home from './pages/home/Home'
import Partidos from './pages/partidos/Partidos'
import EstadisticasPage from './pages/estadisticas/EstadisticasPage'
import VideoPlay from './components/VideoPlay/VideoPlay'

const user = true;

function App() {

  return (

    
    <div className='App-Container'>
      {!user && <Login />}

      {user &&  
        <header>
          <Navbar />  
        </header>
      }
      {user &&
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/charlas' element={<Charlas/>} />
            <Route exact path='/charlas/:charlaID' element={<Charlas/>} />
            <Route exact path='/partidos' element={<Partidos />} />
            <Route exact path='/estadisticas' element={<EstadisticasPage />} />
            <Route exact path='/prensa' element={<Prensa />} />
            <Route exact path='/partidos/:partidoID' element={<VideoPlay tipo='partido'/>} /><Route exact path='/partidos/:partidoID' element={<VideoPlay tipo='partido'/>} /> 
            <Route exact path='/acciones/:partidoID' element={<VideoPlay tipo='acciones'/>} /> 
          </Routes> 
        </main>
      }
      {user && 
        <footer>
          <Footer />
        </footer>
      }
    </div>
  )
}

export default App
