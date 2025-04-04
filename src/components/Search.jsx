import styles from '../css/Body.module.css';
import React, { useState, useEffect } from 'react';
import breakfast from './db/breakfast.json';
import desert from './db/desert.json';
import dinner from './db/dinner.json';
import lunch from './db/lunch.json';
import other from './db/other.json';
import salad from './db/salad.json';
import soup from './db/soup.json';
import { Link } from 'react-router-dom';

const items = [...breakfast, ...lunch, ...dinner, ...desert, ...other, ...salad, ...soup];

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchInput) {
            const filtered = items.filter(item =>
                item.name && item.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    }, [searchInput]);

    return (
        <div>
            <form className={styles.searchContainerStyle}>
                <br />
                <input className={styles.searchInputStyle} type="text" value={searchInput} placeholder="Search for.." name="search" onChange={event => setSearchInput(event.target.value)}/>
                <button className={styles.searchButtonStyle} type="submit" onSubmit={(e) => e.preventDefault()}> Search </button>
                <br />
            </form>
            <ul className={styles.removedBullets}>  
                {filteredData.map((item) => (
                    <li key={item.id}>
                      <Link to={`${item.type}/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;