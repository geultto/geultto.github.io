import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import Logo from "../../static/img/logo.svg";

import styles from "./index.module.css";
import React from "react";

export default function Home() {
  return (
    <Layout title="홈" description="글또 Document">
      <main>
        <div className={styles.container}>
          <Heading as="h1">글또 Document</Heading>
          <Logo />
        </div>
      </main>
    </Layout>
  );
}
