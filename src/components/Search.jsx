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

    const [searchInput, setSearchInput] = useState();
    const [filteredBreakfast, setFilteredBreakfast] = useState(breakfast);
    const [filteredDesert, setFilteredDesert] = useState(desert);
    const [filteredDinner, setFilteredDinner] = useState(dinner);
    const [filteredLunch, setFilteredLunch] = useState(lunch);
    const [filteredOther, setFilteredOther] = useState(other);
    const [filteredSalad, setFilteredSalad] = useState(salad);
    const [filteredSoup, setFilteredSoup] = useState(soup);

    const handleSubmitClick = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    

  

    return (
      <div>
        <form className={styles.searchContainerStyle}>
            <br />
            <input className={styles.searchInputStyle} type="text" value={searchInput} placeholder="Search for.." name="search" />
            <button className={styles.searchButtonStyle} type="submit" onChange={handleSubmitClick}>Search</button>
            <br />
        </form>

          {breakfast.filter((b) => {
            console.log(b.name)
      return b.name.match(searchInput);
    })}
    

   

      </div>

        
    )
}

export default Search