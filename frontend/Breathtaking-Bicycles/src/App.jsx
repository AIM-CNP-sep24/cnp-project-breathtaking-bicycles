import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import Login from './Login.jsx'
import { useEffect, useState } from 'react'
import InstelPagina from './instel-pagina/InstelPagina.jsx'

// const uiSettings = {
//     colorPalette: {
//         colorOne: "#F5EEDC",
//         colorOneShadow: "#E0D9C8",
//         colorTwo: "#27548A",
//         colorTwoShadow: "#1C406B",
//         colorThree: "#183B4E",
//         colorThreeShadow: "#132F3F",
//         colorFour: "#DDA853",
//         colorFourShadow: "#BA8C43",
//     },
//     font: "standard"
// }

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
      setUiSettings({colorPalette: colorPalettes[1],
        font: "font-OpenDyslexic"
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
        <Route path="vertalen" element={<Textfield />} />
        <Route path="" element={<Index />} />
        <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
