import styles from '../css/Body.module.css'

function Footer () {

    return (
        <p className={styles.footerStyle}>
            &copy; {new Date().getFullYear()}, Cooking App
        </p>
    )
    
}

export default Footer