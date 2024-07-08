import Popup from 'reactjs-popup';
import styles from '../css/Receipt.module.css'


function Receipt (props) {    
    
    return (
        <>
        {props.collection.map(item => {
          return (
             <div key={item.id}>
                <h3>{item.name}</h3>
                <p key={item.id} id={item.id}>{item.id} - {item.type}</p>
                <img className={styles.imageStyle} src={item.image} alt="" />
                <br />
                <Popup trigger=
                {<button className={styles.buttonStyle}>Ingredients</button>}
                position="left center">
                <p>{item.ingredients}</p>
                </Popup>
                <Popup trigger=
                {<button className={styles.buttonStyle}>How to Make</button>}
                position="right center">
                <p>{item.howTo}</p>
                </Popup>             
             </div>
           )
        })}
      </>
    )

}

export default Receipt
