import soup from './db/soup.json'

function Soup () {

    
    return (
        <>
        <h1>Soup</h1>
        <hr />
        {soup.map(item => {
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

export default Soup