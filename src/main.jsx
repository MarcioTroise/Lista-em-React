// em arqv CSS precisa colocar a extensao (.css) 
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'

import './styles/global.css';

// manipulando e reendernizando o DOM para o usuario
// dps colocando o Elemento App dentro do root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
