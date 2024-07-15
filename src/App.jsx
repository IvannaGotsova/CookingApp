import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Body from './components/Body'
import Footer from './components/Footer'
import Breakfast from "./components/Breakfast"
import Desert from "./components/Desert"
import Dinner from "./components/Dinner"
import Lunch from "./components/Lunch"
import Other from "./components/Other"
import Salad from "./components/Salad"
import Soup from "./components/Soup"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>  
      <Header /> <br /><br />
      <Search /> <br /><br />
      <Navigation /> <br /><br />

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="salad" element={<Salad />} />
            <Route path="soup" element={<Soup />} />
            <Route path="desert" element={<Desert />} />
            <Route path="other" element={<Other />} />
        </Routes>
      </BrowserRouter><br /><br />

      <Footer />
    </>
  )
}

export default App
