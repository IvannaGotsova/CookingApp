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
import { Routes, Route } from "react-router-dom";
import BreakfastDetails from './components/BreakfastDetails'
import LunchDetails from './components/LunchDetails'
import DinnerDetails from './components/DinnerDetails'
import SaladDetails from './components/SaladDetails'
import SoupDetails from './components/SoupDetails'
import DesertDetails from './components/DesertDetails'
import OtherDetails from './components/OtherDetails'
function App() {

  return (
    <>  
      <Header /> <br /><br />
      <Search /> <br /><br />
      <Navigation /> <br /><br />

        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="breakfast/:id" element={<BreakfastDetails />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="lunch/:id" element={<LunchDetails />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="dinner/:id" element={<DinnerDetails />} />
            <Route path="salad" element={<Salad />} />
            <Route path="salad/:id" element={<SaladDetails />} />
            <Route path="soup" element={<Soup />} />
            <Route path="soup/:id" element={<SoupDetails />} />
            <Route path="desert" element={<Desert />} />
            <Route path="desert/:id" element={<DesertDetails />} />
            <Route path="other" element={<Other />} />
            <Route path="other/:id" element={<OtherDetails />} />
        </Routes><br /><br />

      <Footer />
    </>
  )
}

export default App
