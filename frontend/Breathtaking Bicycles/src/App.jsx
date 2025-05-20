import BenodigdhedenPagina from './BenodigdhedenPagina.jsx'
import {Routes, Route} from 'react-router'
import Header from './header.jsx'
import Textfield from './translate-components/textfield.jsx'
import Index from './Index.jsx'
import BenodigdhedenboomPagina from './benodigdhedenboom-components/BenodigdhedenboomPagina.jsx'
import SettingsPreview from './SettingsPreview.jsx'
import InstelContainer from './InstelContainer.jsx'

function App() {
  return (
    <>
     <Header />
      <Routes>          
        <Route path={"benodigdheden/:parentId"} element={<BenodigdhedenPagina />} />
        <Route path="instelmenu" element={<InstelContainer />} />
        <Route path="vertalen" element={<Textfield />} />
        <Route path="" element={<Index />} />
        <Route path="boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina />} />
        <Route path="settings" element={<SettingsPreview/> } />
      </Routes>
    </>
  )
}

export default App
