import breakfast from './db/breakfast.json'

function Breakfast () {

    
    return (
        <>
        <h1>Breakfast</h1>
        <hr />
        {breakfast.map(item => {
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

export default Breakfast