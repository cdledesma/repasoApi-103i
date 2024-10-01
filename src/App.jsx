import {BrowserRouter, Routes, Route} from "react-router-dom"
import TrendingScreen from "./views/trendingScreen"
import SearchScreen from "./views/searchScreen"
import NavBarApp from "./components/NavbarApp"

function App() {

  return(
    <BrowserRouter>
    <NavBarApp/>
    <Routes>
    <Route path="/" element={<TrendingScreen/>}/>  
    <Route path="/Search" element={<SearchScreen/>}/>  
    </Routes>    
    </BrowserRouter>
  )
}

export default App
