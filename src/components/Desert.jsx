import desert from './db/desert.json'

function Desert () {

    
    return (
        <>
        <h1>Desert</h1>
        <hr />
        {desert.map(item => {
          return (
             <div>
                <h3>{item.name}</h3>
                <p key={item.id}>{item.id} - {item.type}</p>
                <img src={item.image} alt="" />
                <p>{item.ingredients}</p>
                <p>{item.howTo}</p>
             </div>
           )
        })}
      </>
    )

}

export default Desert