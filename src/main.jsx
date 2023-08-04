import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
import { NavbarStateContextProvider } from './context/NavbarStateContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthContextProvider>
    <NavbarStateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </NavbarStateContextProvider>,
  </UserAuthContextProvider>,
)
