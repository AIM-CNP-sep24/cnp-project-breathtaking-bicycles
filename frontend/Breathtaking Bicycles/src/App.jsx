import './App.css'
import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Textfield from './translate-components/textfield.jsx'

function App() {
  
  return (
     <>
      {/* <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina />} />
      </Routes> */}
      <Textfield/>
    </>
  )
}

export default App
