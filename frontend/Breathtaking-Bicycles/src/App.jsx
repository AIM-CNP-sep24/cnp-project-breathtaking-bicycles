import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import SettingsPreview from './SettingsPreview.jsx'
import InstelContainer from './InstelContainer.jsx'
import Login from './Login.jsx'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    async function setColorPalettes() {
      let colorPalettes = await getColorPalettes();
      setUiSettings({colorPalette: colorPalettes[0],
        font: "font-openDyslexic"
      })
    }
    setColorPalettes();
  }, [])
  
  return (
    <>
     <Header />
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina />} />
        <Route path="instelmenu" element={<InstelContainer />} />
        <Route path="vertalen" element={<Textfield />} />
        <Route path="" element={<Index />} />
        <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />
        <Route path="settings" element={<SettingsPreview uiSettings={uiSettings}/> } />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
