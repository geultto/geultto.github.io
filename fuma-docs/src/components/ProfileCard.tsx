"use client";

import React, { type ReactNode } from "react";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  profileImg: string;
  title: string;
  url: string;
  children: ReactNode;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { profileImg, title, url, children } = props;

  return (
    <a className={styles.profileCard} href={url}>
      <img src={profileImg} alt="Profile" />
      <div className={styles.content}>
        <h3>{title}</h3>
        {children}
        <p>{url}</p>
      </div>
    </a>
  );
};
