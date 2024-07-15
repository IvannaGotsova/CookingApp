import React from "react"
import styles from '../css/Body.module.css'

function Body () {

    return  (
    <>
      <div>
        <ul className={styles.removedBullets}>
          <div className={styles.addedOrder}>
            <div>
              <a href="Breakfast"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Breakfast">Breakfast</a></li>
              <br />
            </div>
            <div>
              <a href="Lunch"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Lunch">Lunch</a></li>
              <br />
            </div>
            <div>
              <a href="Dinner"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Dinner">Dinner</a></li>
              <br />
            </div>
            <div>
              <a href="Salad"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Salad">Salad</a></li>
              <br />
            </div>
            <div>
              <a href="Soup"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Soup">Soup</a></li>
              <br />
            </div>
            <div>
              <a href="Desert"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Desert">Desert</a></li>
              <br />
            </div>
            <div>
              <a href="Other"><img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" /></a>
              <li><a href="Other">Other</a></li>
              <br />
            </div>
          </div>
        </ul>      
      </div>
    </>
    )
}

export default Body


