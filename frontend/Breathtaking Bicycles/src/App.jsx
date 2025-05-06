import './App.css'
import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'

function App() {
  return (
     <>
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina />} />
      </Routes>
    </>
  )
}

export default App
