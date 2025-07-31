import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import appStore from './utils/appStore.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>,
)
