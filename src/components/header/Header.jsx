import styles from './header.module.css'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles['wrapper-head']}>
                <div className={styles.heads}>
                    <div style={{display: 'flex', alignItems: 'center'}} className={styles['upper-case']}>
                        <div className={styles['upper-case__left']}>
                            <Link to={'/#'}>Платные услуги</Link>
                            <Link to={'/#'}>Помощь</Link>
                        </div>
                    </div>
                    <div style={{alignItems: 'center'}} className={styles['lower-case']}>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;