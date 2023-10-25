import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
import { UserDataContextProvider } from './context/UserDataContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthContextProvider>
    <UserDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </UserDataContextProvider>,
  </UserAuthContextProvider>,
)
