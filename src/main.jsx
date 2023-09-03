import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowPageProvider from "./context/ShowPage-provider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowPageProvider>
    <App />
    </ShowPageProvider>
  </React.StrictMode>,
)
