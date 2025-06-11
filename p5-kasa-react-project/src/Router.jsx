import {Routes, Route} from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"

function AppRouter() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter