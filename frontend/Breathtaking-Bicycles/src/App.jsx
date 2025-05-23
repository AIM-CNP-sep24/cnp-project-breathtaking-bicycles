import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/Textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import Login from './Login.jsx'
import { useEffect, useState } from 'react'
import InstelPagina from './instel-pagina/InstelPagina.jsx'

async function getColorPalettes(){
  const url = "http://localhost:8080/kleurpaletten";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json)
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
        font: "standard"
      })
    }
    ColorPalettesFetch();
  }, [])
  
  return (
    <>
     <Header uiSettings={uiSettings}/>
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina uiSettings={uiSettings}/>} />
        <Route path="instelmenu" element={<InstelPagina uiSettings={uiSettings} colorPalettes={colorPalettes}/>} />
        <Route path="vertalen" element={<Textfield uiSettings={uiSettings}/>} />
        <Route path="" element={<Index />} />
        <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
