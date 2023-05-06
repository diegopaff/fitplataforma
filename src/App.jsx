import './App.scss'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Charlas from './pages/charlas/charlas'

import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

const user = false;

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
              <Route exact path='/work/:workId' element={<Footer/>} /> 
            </Routes> 
          </main>
        }
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}

export default App
