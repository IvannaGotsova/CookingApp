import salad from './db/salad.json'
import Receipt
 from './Receipt'
function Salad () {

    
    return (
        <>
        <h1>Salad</h1>
        <hr />
        <Receipt collection = {salad}/>
      </>
    )

}

export default Salad