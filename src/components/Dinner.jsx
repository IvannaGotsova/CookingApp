import dinner from './db/dinner.json'

function Dinner () {

    
    return (
        <>
        <h1>Dinner</h1>
        <hr />
        {dinner.map(item => {
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

export default Dinner