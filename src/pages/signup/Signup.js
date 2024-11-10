import styles from "./SignupPage.module.css";

function SignupPage() {
    return (
        <div className={styles["container"]}>
            <div className={styles["registration-container"]}>
                <h1 className={styles["title"]}>Créer un compte</h1>
                <p className={styles["subtitle"]}>Veuillez vous inscrire ci-dessous pour créer un compte</p>
                <hr />
                <form>
                    <div className={styles["form-row"]}>
                        <div className={styles["form-group"]}>
                            <label>Nom complet <span>*</span></label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className={styles["form-group"]}>
                            <label>E-Mail <span>*</span></label>
                            <input type="email" placeholder="Email@example.xyz" required />
                        </div>
                    </div>

                    <div className={styles["form-row"]}>
                        <div className={styles["form-group"]}>
                            <label>Téléphone mobile</label>
                            <div className={styles["mobile-input"]}>
                                <input type="tel" placeholder="07 76 41 25 46" style={{ flex: 1 }} />
                            </div>
                        </div>
                        <div className={styles["form-group"]}>
                            <label>Mot de passe *</label>
                            <input type="password" placeholder="Mot de passe" />
                        </div>
                    </div>

                    <div className={styles["terms"]}>
                        <input type="checkbox" id="terms" />
                        <label for="terms">En créant un compte, vous acceptez les Conditions Générales & la Politique de
                            Confidentialité.</label>
                    </div>

                    <button type="submit" className={styles["create-button"]}>Créer un compte</button>

                    <p className={styles["login-link"]}>
                        Vous avez déjà un compte? <a href="./">Connectez-vous</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;