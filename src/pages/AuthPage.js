import { Link } from "react-router-dom";
import styles from "../assets/styles/stylesForPages/authPage/auth.module.css";

const AuthPage = () => {
    return (
        <div className="App">
            <div className={styles.back}>
                <div className={styles.square}>
                    <input className={styles.email} type="text" placeholder="Введите имя пользователя"                    
                    />
                    <div className={styles.hz}>                       
                        <button className={styles.continue}>
                            Продолжить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
