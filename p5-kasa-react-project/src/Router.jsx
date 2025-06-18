import {Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout.jsx"
import Home from "./Pages/Home"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"
import Logement from "./Pages/Logement.jsx"

function AppRouter() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter