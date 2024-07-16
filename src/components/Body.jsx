import React from "react"
import { Link } from 'react-router-dom';
import styles from '../css/Body.module.css'

function Body () {

    return  (
    <>
      <div>
        <ul className={styles.removedBullets}>
          <div className={styles.addedOrder}>
            <div>
              <Link to="Breakfast"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Breakfast">Breakfast</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Lunch"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Lunch">Lunch</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Dinner"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Dinner">Dinner</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Salad"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Salad">Salad</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Soup"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Soup">Soup</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Desert"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Desert">Desert</Link ></li>
              <br />
            </div>
            <div>
              <Link to="Other"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></Link >
              <li><Link to="Other">Other</Link ></li>
              <br />
            </div>
          </div>
        </ul>      
      </div>
    </>
    )
}

export default Body


