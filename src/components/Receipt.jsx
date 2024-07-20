import Popup from 'reactjs-popup';
import styles from '../css/Receipt.module.css'
import { Link } from 'react-router-dom';


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
                <p className={styles.popUpWindowStyle}>{item.ingredients}</p>
                </Popup>
                <Popup trigger=
                {<button className={styles.buttonStyle}>How to Make</button>}
                position="right center">
                <p className={styles.popUpWindowStyle}>{item.howTo}</p>
                </Popup>  
                <a href={`${item.type}/${item.id}`} >
                  <button className={styles.buttonStyle}>More...</button>    
                </a>
             </div>
           )
        })}
      </>
    )

}

export default Receipt
