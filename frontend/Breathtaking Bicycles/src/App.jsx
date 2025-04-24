import './App.css'
import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import { useState } from 'react'
import {Routes, Route} from 'react-router'

function App() {
  const categorie1 = "Eten en Drinken";


  return (
    <>
      {/* <Routes> */}
        {/* <Route path="benodigdheden" element={<BenodigdhedenPagina parent={categorie1} />} /> */}
        <BenodigdhedenPagina parent="root" />
      {/* </Routes> */}
    </>
  )
}

export default App
