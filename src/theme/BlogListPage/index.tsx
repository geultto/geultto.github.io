import clsx from "clsx";
import React from "react";

import Link from "@docusaurus/Link";
import { HtmlClassNameProvider, PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import type { Props } from "@theme/BlogListPage";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import styles from "./styles.module.css";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { items, metadata } = props;

  return (
    <Layout {...props}>
      <div className="container margin-vert--lg">
        <h1>{metadata.blogTitle}</h1>
        <div className={clsx(styles.contentList)}>
          {items.map(({ content }) => {
            const { metadata } = content;
            const { authors, date, title, description, permalink } = metadata;

            return (
              <div className={clsx(styles.contentListItem)} key={permalink}>
                <Link to={permalink}>
                  <h2>{title}</h2>
                </Link>

                <div className={clsx(styles.metadataContainer)}>
                  {/* Date */}
                  <div className={clsx(styles.rowFlexContainer)}>
                    <span className={clsx(styles.caption)}>date:</span>
                    <span>{new Date(date).toLocaleDateString()}</span>
                  </div>

                  {/* Writers */}
                  <div className={clsx(styles.rowFlexContainer)}>
                    <span className={clsx(styles.caption)}>author:</span>
                    <div className={clsx(styles.thumbnailList)}>
                      {authors.map((author) => (
                        <div key={author.url} className={clsx(styles.thumbnailItem)}>
                          <img className={clsx(styles.thumbnail)} src={author.imageURL} alt={author.name} />
                          <Link className={clsx(styles.authorName)} to={author.url}>
                            {author.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className={clsx(styles.rowFlexContainer)}>
                    <span className={clsx(styles.caption)}>tags:</span>
                    <div className={clsx(styles.tagList)}>
                      {metadata.tags.map(({ label, permalink }) => (
                        <Link key={permalink} to={permalink} className={clsx(styles.tag)}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <p className={clsx(styles.contentDescription)}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
