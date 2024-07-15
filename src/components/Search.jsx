import breakfast from './db/breakfast.json'
import lunch from './db/lunch.json'
import dinner from './db/dinner.json'
import salad from './db/salad.json'
import soup from './db/soup.json'
import desert from './db/desert.json'
import other from './db/other.json'
import styles from '../css/Body.module.css'

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