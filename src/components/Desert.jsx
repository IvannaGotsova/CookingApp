import desert from './db/desert.json'
import Receipt from './Receipt'

function Desert () {

    
    return (
        <div style={{backgroundColor: "gray"}}>
        <h1>Desert</h1>
        <hr />
        <Receipt collection = {desert}/>
      </div>
    )

}

export default Desert