import lunch from './db/lunch.json'
import Receipt from './Receipt'

function Lunch () {

    
    return (
        <>
        <h1>Lunch</h1>
        <hr />
        <Receipt collection = {lunch}/>
      </>
    )

}

export default Lunch