import React, { type ReactNode } from "react";
import clsx from "clsx";

import styles from "./Answer.module.css";

interface AnswerProps {
  children: ReactNode;
  profileImg?: string;
  name?: string;
  direction?: "left" | "right" | "center";
}

export const Answer = (props: AnswerProps) => {
  const { children, profileImg, name = "", direction = "right" } = props;

  return (
    <div className={clsx(styles.container, styles[direction])}>
      {direction === "left" && <div className={styles.content}>{children}</div>}
      {profileImg && (
        <div>
          <div className={styles.profile}>
            <img src={profileImg} alt="profile" />
          </div>
          {name && <p className={styles.name}>{name}</p>}
        </div>
      )}
      {(direction === "right" || direction === "center") && <div className={styles.content}>{children}</div>}
    </div>
  );
};
