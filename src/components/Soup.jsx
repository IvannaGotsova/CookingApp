import soup from './db/soup.json'
import Receipt from './Receipt'

function Soup () {

    
    return (
        <>
        <h1>Soup</h1>
        <hr />
        <Receipt collection = {soup}/>
      </>
    )

}

export default Soup