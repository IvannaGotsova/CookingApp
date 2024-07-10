import Breakfast from "./Breakfast"
import Desert from "./Desert"
import Dinner from "./Dinner"
import Lunch from "./Lunch"
import Other from "./Other"
import Salad from "./Salad"
import Soup from "./Soup"
import Navigation from "./Navigation"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../css/Body.module.css'

function Body () {

    return  (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="breakfast" element={<Breakfast />} />
              <Route path="lunch" element={<Lunch />} />
              <Route path="dinner" element={<Dinner />} />
              <Route path="salad" element={<Salad />} />
              <Route path="soup" element={<Soup />} />
              <Route path="desert" element={<Desert />} />
              <Route path="other" element={<Other />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
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


