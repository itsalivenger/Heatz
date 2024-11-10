import styles from "./ResetPass.module.css";

function ResetPass() {
    return (
        <div className={styles["container"]}>
            <div class={styles["pseudo-body"]}>
                <div class={styles["form-container"]}>
                    <h1>Réinitialiser votre mot de passe</h1>
                    <p>Nous vous enverrons un e-mail pour réinitialiser votre mot de passe.</p>
                    <hr />

                    <div class={styles["input-container"]}>
                        <label>Adresse e-mail enregistrée*</label>
                        <input type="email" placeholder="Adresse e-mail enregistrée" required />
                    </div>

                    <button class={styles["reset-btn"]}>Réinitialiser le mot de passe</button>

                    <div class={styles["resend-div"]}>Vous n'avez pas reçu l'e-mail ? <span class={styles["resend"]}>Renvoyer l'e-mail dans <span class={styles["time-remain"]}>23</span></span></div>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;