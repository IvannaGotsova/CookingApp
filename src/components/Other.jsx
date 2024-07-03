import other from './db/other.json'

function Other () {

    
    return (
        <>
        <h1>Others</h1>
        <hr />
        {other.map(item => {
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

export default Other