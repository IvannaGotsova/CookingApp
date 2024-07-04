function Receipt (props) {

    
    return (
        <>
        {props.collection.map(item => {
          return (
             <div key={item.id}>
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

export default Receipt
