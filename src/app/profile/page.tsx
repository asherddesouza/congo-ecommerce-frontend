import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import Link from "next/link";

export default function Profile() {
  const name = "Asher De Souza";
  const email = "asher.desouza@ada.ac.uk";

  return (
    <div>
      <Navbar />
      <div className={styles.profile}>
        <div className={styles.title}>Profile</div>
        <div className={styles.profileDetails}>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
        </div>
        <div className={styles.editProfileButtons}>
          <Link href="/profile/edit-details">
            <button className={`${styles.editProfileButton}`}>
              Edit Details
            </button>
          </Link>
          <Link href="/profile/change-password">
            <button className={`${styles.editProfileButton}`}>
              Change Password
            </button>
          </Link>
          <Link href="/profile/delete-account">
            <button
              className={`${styles.editProfileButton} ${styles.deleteAccount}`}
            >
              Delete Account
            </button>
          </Link>
        </div>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
