import other from './db/other.json'
import Receipt from './Receipt'

function Other () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Others</h1>
        <hr />
        <Receipt collection = {other}/>
      </div>
    )

}

export default Other