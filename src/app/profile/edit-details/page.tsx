import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import Form from "next/form";

export default function EditDetails() {
  const name = "Asher De Souza";
  const email = "asher.desouza@ada.ac.uk";

  return (
    <div>
      <Navbar />
      <div className={styles.editDetails}>
        <div className={styles.title}>Edit Details</div>
        <div className={styles.text}>
          Your name is <span className={styles.details}>{name}</span> and your
          email address is <span className={styles.details}>{email}</span>.
        </div>
        <div className={styles.text}>
          Enter your new name/email address below:
        </div>
        <br></br>
        <Form action="/profile/edit-details" className={styles.editDetailsForm}>
          <div>Name</div>
          <input
            name="query"
            type="text"
            placeholder="Updated Name"
            className={styles.formInput}
          />
          <div>Email</div>
          <input
            name="query"
            type="text"
            placeholder="Updated Email"
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
