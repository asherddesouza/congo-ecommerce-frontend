import React from "react";
import Navbar from "../../../components/navbar/page";
import styles from "./page.module.css";
import Form from "next/form";

export default function ChangePassword() {
  return (
    <div>
      <Navbar />
      <div className={styles.changePassword}>
        <div className={styles.title}>Change Password</div>
        <div className={styles.text}>Change your password below:</div>
        <br></br>
        <Form action="/profile/edit-details" className={styles.editDetailsForm}>
          <div>Old Password</div>
          <input
            name="query"
            type="password"
            placeholder="Enter your old password here."
            className={styles.formInput}
          />
          <div>New Password</div>
          <input
            name="query"
            type="password"
            placeholder="Enter your new password here."
            className={styles.formInput}
          />
          <div>Confirm New Password</div>
          <input
            name="query"
            type="password"
            placeholder="Enter your new password again."
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
