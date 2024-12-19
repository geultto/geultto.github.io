import React from "react";
import styles from "./Question.module.css";

export const Question = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Q.</p>
      </div>
      {children}
    </div>
  );
};
