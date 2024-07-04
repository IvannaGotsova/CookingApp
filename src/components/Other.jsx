import other from './db/other.json'
import Receipt from './Receipt'

function Other () {

    
    return (
        <>
        <h1>Others</h1>
        <hr />
        <Receipt collection = {other}/>
      </>
    )

}

export default Other