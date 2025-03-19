import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import Form from "next/form";

export default function DeleteAccount() {
  return (
    <div>
      <Navbar />
      <div className={styles.deleteAccount}>
        <div className={styles.title}>Delete Account</div>
        <div className={styles.text}>
          Are you sure that you want to delete your account?
        </div>
        <div className={styles.text}>Doing this is permanent.</div>
        <br></br>
        <Form action="/profile/edit-details" className={styles.editDetailsForm}>
          <div>Password</div>
          <input
            name="query"
            type="password"
            placeholder="Password"
            className={styles.formInput}
          />
          <div>
            Type 'CONFIRM' in this box if you're sure you want to delete your
            account!
          </div>
          <input
            name="query"
            type="text"
            placeholder=" "
            className={styles.formInput}
          />
          <button type="submit" className={styles.editDetailsButton}>
            Submit
          </button>
        </Form>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
