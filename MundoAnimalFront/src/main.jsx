
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import GlobalContext from './Context/GlobalContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <GlobalContext>
      <App />
 
    </GlobalContext>
       
 
  </BrowserRouter>,
)
