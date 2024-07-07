import Breakfast from "./Breakfast"
import Desert from "./Desert"
import Dinner from "./Dinner"
import Lunch from "./Lunch"
import Other from "./Other"
import Salad from "./Salad"
import Soup from "./Soup"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../css/Body.module.css'

function Body () {

    return  (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="salad" element={<Salad />} />
            <Route path="soup" element={<Soup />} />
            <Route path="desert" element={<Desert />} />
            <Route path="other" element={<Other />} />
          </Routes>
        </BrowserRouter>
        <ul className={styles.removedBullets}>
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Breakfast">Breakfast</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Lunch">Lunch</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Dinner">Dinner</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Salad">Salad</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Soup">Soup</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Desert">Desert</a></li>
            <br />
            <img className={styles.imageStyle} src="src\\assets\\Picture.jpg" alt="" />
            <li><a href="Other">Other</a></li>
        </ul>
      </div>
    </>
    )
}

export default Body


