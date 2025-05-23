import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route,} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import Login from './login/Login.jsx'
import { useEffect, useState } from 'react'
import InstelPagina from './instel-pagina/InstelPagina.jsx'
import ProtectedRoute from './login/ProtectedRoute.jsx'

async function getColorPalettes(){
  const url = "http://localhost:8080/kleurpaletten";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function App() {
  const [uiSettings, setUiSettings] = useState({font:"", colorPalette:""})
  const [colorPalettes, setColorPalettes] = useState([])

  useEffect(() => {
    async function ColorPalettesFetch() {
      let colorPalettes = await getColorPalettes();
      setColorPalettes(colorPalettes)
      setUiSettings({colorPalette: colorPalettes[0],
        font: "font-OpenDyslexic"
      })
    }
    ColorPalettesFetch();
  }, [])
  
  return (
    <>
     <Header />
      <Routes>     
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route path={"benodigdheden/:parentId"} element={<ProtectedRoute><BenodigdhedenPagina uiSettings={uiSettings}/></ProtectedRoute>} />
        <Route path="instelmenu" element={<ProtectedRoute><InstelPagina uiSettings={uiSettings} colorPalettes={colorPalettes}/></ProtectedRoute>} />
        <Route path="vertalen" element={<ProtectedRoute><Textfield /></ProtectedRoute>} />
        <Route path="" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route path="boomstructuurbeheer/:parentId" element={<ProtectedRoute><BenodigdhedenboomPagina /></ProtectedRoute>} />
        
      </Routes>
    </>
  )
}

export default App
