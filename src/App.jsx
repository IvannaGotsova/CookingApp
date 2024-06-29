import './App.css'
import Header from './Header'
import Navigation from './Navigation'
import Body from './Body'
import Footer from './Footer'
import Breakfast from './Breakfast'
import Salad from './Salad'
import Desert from './Desertsjsx'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Soup from './Soup'

function App() {

  return (
    <>
      <Header /> <br /><br />
      <Navigation /> <br /><br />
      <Breakfast /> <Lunch /> <Dinner /> <br /><br />
      <Salad /> <Soup /> <Desert /><br /><br />
      <Footer />
    </>
  )
}

export default App
