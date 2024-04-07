import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import Logo from "../../static/img/logo.svg";

import styles from "./index.module.css";
import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const history = useHistory();
  const introUrl = useBaseUrl('docs/intro'); 

  useEffect(() => {
    // 페이지가 로드될 때 /intro (또는 해당 baseUrl을 포함한 경로)로 리디렉션
    history.push(introUrl);
  }, [history, introUrl]);

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
