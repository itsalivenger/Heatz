import styles from "./LoginPage.module.css";

function LoginPage() {
    return (
        <div className={styles["container"]}>
            <div className={styles["pseudo-body"]}>
                <div className={styles["form-container"]}>
                    <h1>Connexion avec E-mail</h1>
                    <p>Vous n'avez pas encore de compte ? <span className={styles["create-account"]}>Créer un compte</span></p>
                    <hr></hr>

                    <div className={styles["input-container"]}>
                        <div className={styles.inputContainer}>
                            <label>E-Mail *</label>
                            <input type="email" placeholder="Email@example.xyz" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Mot de passe *</label>
                            <input type="password" placeholder="Mot de passe" required />
                        </div>
                    </div>

                    <button className={styles["login-btn"]}>CONNEXION</button>

                    <div className={styles["forgot-password-div"]}>Mot de passe oublié ? <span className={styles["reset"]}>Réinitialiser le mot de passe</span></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;