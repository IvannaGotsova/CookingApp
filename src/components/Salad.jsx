import salad from './db/salad.json'

function Salad () {

    
    return (
        <>
        <h1>Salad</h1>
        <hr />
        {salad.map(item => {
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

export default Salad