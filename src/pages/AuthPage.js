import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/stylesForPages/authPage/auth.module.css";

const AuthPage = () => {
    const [showPassField, setShowPassField] = useState(false);
    const [selectedButton, setSelectedButton] = useState("email");

    const handleButtonSelect = (buttonType) => {
        setSelectedButton(buttonType);
    };

    const handleContinueClick = () => {
        setShowPassField(true);
    };

    return (
        <div className="App">
            <div className={styles.back}>
                <div className={styles.square}>
                    <div className={styles.switchSelect}>
                        <div className={styles.buttonsContainer}>
                            <button className={`${styles.button2} ${selectedButton === "email" ? styles.selectedButton : ""}`} onClick={() => handleButtonSelect("email")}>
                                Почта
                            </button>
                            <button className={`${styles.button2} ${selectedButton === "phone" ? styles.selectedButton : ""}`} onClick={() => handleButtonSelect("phone")}>
                                Телефон
                            </button>
                        </div>
                    </div>
                    <input className={styles.email} type="text" placeholder="Введите имя пользователя" />
                    {showPassField && (
                        <>
                            <input className={styles.email} type="text" placeholder="Введите пароль" />
                            <div className={styles.forgotPassword}>
                                <Link to="/forgot-password" className={styles.forgotPasswordLink}>
                                    Забыли пароль?
                                </Link>
                            </div>
                        </>
                    )}
                    <div className={styles.hz}>
                        <button className={styles.continue} onClick={handleContinueClick}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
