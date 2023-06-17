import { Link } from "react-router-dom";
import styles from "../assets/styles/stylesForPages/authPage/auth.module.css";

const AuthPage = () => {
    return (
        <div className="App">
            <div className={styles.back}>
                <div className={styles.square}>
                    <input
                        type="text"
                        placeholder="Введите имя пользователя"
                        style={{
                            width: "300px",
                            height: "46px",
                            borderRadius: "6px",
                            padding: "12px",
                            gap: "6px",
                            boxSizing: "border-box",
                            border: "1px solid #D8DEEB",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <button
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "12px",
                                gap: "14px",
                                width: "300px",
                                height: "46px",
                                background: "#107EDC",
                                borderRadius: "8px",
                                flex: "none",
                                order: "1",
                                flexGrow: "0",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Продолжить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
