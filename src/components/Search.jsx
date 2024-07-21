import styles from '../css/Body.module.css'
import React, { useState } from 'react'
import breakfast from './db/breakfast.json'
import desert from './db/desert.json'
import dinner from './db/dinner.json'
import lunch from './db/lunch.json'
import other from './db/other.json'
import salad from './db/salad.json'
import soup from './db/soup.json'

function Search () {

    return (
        <form className={styles.searchContainerStyle}>
            <br />
            <input className={styles.searchInputStyle} type="text" placeholder="Search for.." name="search" />
            <button className={styles.searchButtonStyle} type="submit">Search</button>
            <br />
        </form>
    )
}

export default Search