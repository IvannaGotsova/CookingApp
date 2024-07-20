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