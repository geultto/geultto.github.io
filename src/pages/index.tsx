import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import Logo from "../../static/img/logo.svg";

import * as styles from "./index.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="글또 Document">
      <main>
        <div className={styles.container}>
          <Heading as="h1">글또 Document</Heading>
          <Logo />
        </div>
      </main>
    </Layout>
  );
}
