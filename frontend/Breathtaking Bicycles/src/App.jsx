import './App.css'
import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/textfield.jsx'
import Index from './Index.jsx'

function App() {
  
  return (
    <>
     <Header />
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina />} />
        <Route path="vertalen" element={<Textfield />} />
        <Route path="" element={<Index />} />
      </Routes>
    </>
  )
}

export default App
