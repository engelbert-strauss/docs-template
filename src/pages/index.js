import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Centralized structure',
    imageUrl: 'img/undraw_Content_structure_re_ebkv.svg',
    description: 'Feel comfortable when look at documentation. Always see the same structure. Find content of interest fast without loosing your way.',
  },
  {
    title: 'Common look and feel',
    imageUrl: 'img/undraw_design_components_9vy6.svg',
    description: 'Look at documentation and feel at home. No need to get used to different look and feels.',
  },
  {
    title: 'Markdown based',
    imageUrl: 'img/undraw_Content_creator_re_pt5b.svg',
    description: 'Write documentation in markdown. Simple, easy, fast. No technical background needed. Get everyone involved.',
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><Translate>{title}</Translate></h3>
      <p><Translate>{description}</Translate></p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="">
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle"><Translate>{siteConfig.tagline}</Translate></p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary',
                styles.link,
              )}
              to={useBaseUrl('docs/user-guide')}>
              <Translate>I'm a user</Translate>
            </Link>
            <Link
              className={clsx(
                'button button--primary',
                styles.link,
              )}
              to={useBaseUrl('docs/architecture')}>
              <Translate description="Developers">I'm a developer</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
