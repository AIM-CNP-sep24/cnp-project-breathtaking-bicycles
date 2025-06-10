import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import { Routes, Route } from 'react-router'
import Header from './Header.jsx'
import Textfield from './translate-components/Textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import Login from './login/Login.jsx'
import { useEffect, useState } from 'react'
import InstelPagina from './instel-pagina/InstelPagina.jsx'
import ProtectedRoute from './login/ProtectedRoute.jsx'

async function getColorPalettes() {
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

async function getLanguages() {
  const url = "http://localhost:8080/talen-ophalen";

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
  const [uiSettings, setUiSettings] = useState({ font:"", colorPalette:""})
  const [languages, setLanguages] = useState([]);
  const [colorPalettes, setColorPalettes] = useState([])
  const fonts = ["standard", "font-OpenDyslexic"]
  const [selectedPalet, setSelectedPalet] = useState(1);
  const [selectedFont, setSelectedFont] = useState("standard");
  const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState("");
  const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState("");

    useEffect(() => {
    async function LanguagesFetch() {
      let languages = await getLanguages();
      if (languages && languages.length > 0) {
        setLanguages(languages);
        setSelectedLanguageZorgvrager(languages[0]);
        setSelectedLanguageZorgverlener(languages[1]);
      }
    }
    LanguagesFetch();
  }, [])

  console.log("selectedLanguageZorgverlener ", selectedLanguageZorgverlener, " selectedLanguageZorgvrager ", selectedLanguageZorgvrager);

  useEffect(() => {
    async function ColorPalettesFetch() {
      let colorPalettes = await getColorPalettes();
      setColorPalettes(colorPalettes)
      setUiSettings({
        colorPalette: colorPalettes[0],
        font: fonts[0]
      })
    }
    ColorPalettesFetch();
  }, [])



  
  return (
    <>
     <Header uiSettings={uiSettings}/>
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina 
          uiSettings={uiSettings} 
          selectedLanguageZorgverlener={selectedLanguageZorgverlener} 
          selectedLanguageZorgvrager={selectedLanguageZorgvrager}
          />} 
        />
        <Route path="instelmenu" element={<InstelPagina 
          selectedPalet={selectedPalet}
          setSelectedPalet={setSelectedPalet}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          uiSettings={uiSettings}
          setUiSettings={setUiSettings}
          colorPalettes={colorPalettes}
          fonts={fonts}
          languages={languages}
          selectedLanguageZorgverlener={selectedLanguageZorgverlener}
          setSelectedLanguageZorgverlener={setSelectedLanguageZorgverlener}
          selectedLanguageZorgvrager={selectedLanguageZorgvrager}
          setSelectedLanguageZorgvrager={setSelectedLanguageZorgvrager}/>} 
        />
        <Route path="vertalen" element={<Textfield uiSettings={uiSettings} 
          selectedLanguageZorgverlener={selectedLanguageZorgverlener}
          selectedLanguageZorgvrager={selectedLanguageZorgvrager}/>} 
        />
        <Route path="" element={<Index />} />
        <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />

        <Route path="login" element={<Login />} />
        
        {/* All other routes protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="benodigdheden/:parentId" element={<BenodigdhedenPagina uiSettings={uiSettings} />} />
          <Route path="instelmenu" element={
            <InstelPagina
              selectedPalet={selectedPalet}
              setSelectedPalet={setSelectedPalet}
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              uiSettings={uiSettings}
              setUiSettings={setUiSettings}
              colorPalettes={colorPalettes}
              fonts={fonts}
              selectedLanguageZorgverlener={selectedLanguageZorgverlener}
              setSelectedLanguageZorgverlener={setSelectedLanguageZorgverlener}
              selectedLanguageZorgvrager={selectedLanguageZorgvrager}
              setSelectedLanguageZorgvrager={setSelectedLanguageZorgvrager}
            />
          } />
          <Route path="vertalen" element={
            <Textfield
              uiSettings={uiSettings}
              selectedLanguageZorgverlener={selectedLanguageZorgverlener}
              selectedLanguageZorgvrager={selectedLanguageZorgvrager}
            />
          } />
          <Route path="" element={<Index />} />
          <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
