import desert from './db/desert.json'
import Receipt from './Receipt'

function Desert () {

    
    return (
        <>
        <h1>Desert</h1>
        <hr />
        <Receipt collection = {desert}/>
      </>
    )

}

export default Desert