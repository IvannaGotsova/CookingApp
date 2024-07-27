import styles from '../css/Body.module.css'
import React, { useState, useEffect } from 'react'
import breakfast from './db/breakfast.json'
import desert from './db/desert.json'
import dinner from './db/dinner.json'
import lunch from './db/lunch.json'
import other from './db/other.json'
import salad from './db/salad.json'
import soup from './db/soup.json'

function Search () {

    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
 
    const items = [breakfast, lunch, dinner, desert, other, salad, soup];
 
    useEffect(() => {
        const filtered = breakfast.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchInput]);

    return (
      <div>
        <form className={styles.searchContainerStyle}>
            <br />
            <input className={styles.searchInputStyle} type="text" defaultValue={searchInput} placeholder="Search for.." name="search" />
            <button className={styles.searchButtonStyle} type="submit" onClick={(e) => setSearchInput(e.target.value)}>Search</button>
            <br />
        </form>
        <ul>
            {filteredData.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
      </div>

        
    )
}

export default Search