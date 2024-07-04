import lunch from './db/lunch.json'
import Receipt from './Receipt'

function Lunch () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Lunch</h1>
        <hr />
        <Receipt collection = {lunch}/>
      </div>
    )

}

export default Lunch