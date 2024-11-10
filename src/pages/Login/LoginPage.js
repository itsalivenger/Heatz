import styles from "./LoginPage.module.css";

function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles["pseudo-body"]}>
                <div className={styles["form-container"]}>
                    <h1>Créer un compte</h1>
                    <p>Veuillez vous inscrire ci-dessous pour créer un compte</p>
                    <hr className={styles["hr"]} />

                    <div className={`${styles["form-group"]} ${styles.first}`}>
                        <div className={styles["input-container"]}>
                            <label className={styles.labels} htmlFor="full-name">Nom complet*</label>
                            <input type="text" id="full-name" placeholder="Nom complet*" required />
                        </div>

                        <div className={styles["input-container"]}>
                            <label className={styles.labels} htmlFor="email">E-mail*</label>
                            <input type="email" id="email" placeholder="E-mail*" required />
                        </div>
                    </div>

                    <div className={`${styles["form-group"]} ${styles["second"]}`}>
                        <div className={styles["input-container"]}>
                            <label className={styles.labels} htmlFor="mobile">Téléphone</label>
                            <input type="tel" id="mobile" placeholder="Téléphone" required />
                        </div>

                        <div className={styles["input-container"]}>
                            <label className={styles.labels} htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" placeholder="Mot de passe" required />
                        </div>
                    </div>

                    <div className={styles["terms"]}>
                        <div className={styles["check-div"]}><span className={styles["expand"]}>expand</span></div>
                        <label className={`${styles.labels} ${styles["term-label"]}`}>En créant un compte, vous acceptez les Conditions générales & la Politique de confidentialité.</label>
                    </div>

                    <button className={styles["submit-btn"]}>Créer un compte</button>

                    <div className={styles["login-link"]}>Vous avez déjà un compte ? <a href="./">Connexion</a></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;