import lunch from './db/lunch.json'

function Lunch () {

    
    return (
        <>
        <h1>Lunch</h1>
        <hr />
        {lunch.map(item => {
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

export default Lunch