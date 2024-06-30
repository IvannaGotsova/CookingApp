import Breakfast from "./Breakfast"
import Desert from "./Desert"
import Dinner from "./Dinner"
import Lunch from "./Lunch"
import Salad from "./Salad"
import Soup from "./Soup"

function Body () {

    return  (
    <>
      <Breakfast /> <Lunch /> <Dinner /> <br /><br />
      <Salad /> <Soup /> <Desert />
    </>
    )
}

export default Body