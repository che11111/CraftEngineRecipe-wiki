import {useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const guides = [
  {
    number: '01',
    title: 'Getting started',
    description: 'Choose your version, install the plugin, and open your first menu.',
    to: '/docs/guide/getting-started',
    zh: '安装与开始',
    zhTo: '/docs/guide-zh/getting-started',
  },
  {
    number: '02',
    title: 'Set up your menus',
    description: 'Customize categories, displayed items, and hiding rules.',
    to: '/docs/guide/categories',
    zh: '设置你的菜单',
    zhTo: '/docs/guide-zh/categories',
  },
  {
    number: '03',
    title: 'Update the plugin',
    description: 'Keep your configuration and update the resource pack when needed.',
    to: '/docs/guide/updating',
    zh: '更新插件',
    zhTo: '/docs/guide-zh/updating',
  },
];

function Showcase() {
  const [playing, setPlaying] = useState(false);
  const screenshot = useBaseUrl('/img/1.png');
  const demo = useBaseUrl('/img/Menu_Display.gif');

  return (
    <figure className={styles.showcase}>
      <div className={styles.showcaseTop}>
        <span className={styles.showcaseLabel}>
          <span className={styles.statusDot} aria-hidden="true" />
          IN-GAME PREVIEW
        </span>
        <span className={styles.showcaseCommand}>/cer</span>
      </div>
      <div className={styles.preview}>
        <img
          src={playing ? demo : screenshot}
          alt={playing ? 'Menu showcase: browse items by namespace and workstation type' : 'In-game crafting recipe showing the ingredients and result'}
          width="1338"
          height="944"
          fetchPriority="high"
        />
      </div>
      <figcaption className={styles.showcaseCaption}>
        <span>Browse items, recipes, and uses.</span>
        <button
          type="button"
          className={styles.demoButton}
          onClick={() => setPlaying(!playing)}
          aria-pressed={playing}
          aria-label={playing ? 'Stop demo' : 'Play demo'}>
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
          {playing ? 'Stop demo' : 'Play demo'}
        </button>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const logo = useBaseUrl('/img/CraftEngineRecipe.png');

  return (
    <Layout
      title="User Guide"
      description="Learn how to install CraftEngineRecipe, browse recipes, configure categories, and update the plugin. Guides in English and Chinese.">
      <main className={styles.home}>
        <div className={styles.content}>
          <section className={styles.hero} aria-labelledby="home-title">
            <div className={styles.intro}>
              <div className={styles.brand}>
                <img src={logo} alt="" width="52" height="52" />
                <div>
                  <span className={styles.brandName}>CraftEngineRecipe</span>
                  <span className={styles.eyebrow}>USER GUIDE</span>
                </div>
              </div>
              <Heading as="h1" id="home-title" className={styles.title}>
                Find recipes.<br />Explore uses.
              </Heading>
              <p className={styles.description}>
                An item and recipe browser for CraftEngine.<br />
                Browse items and discover what you can craft.
              </p>
              <p className={styles.englishDescription} lang="en">
                From installation to menu setup,<br />
                this guide helps you get started.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryLink} to="/docs/guide/getting-started">
                  English Guide <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.secondaryLink} to="/docs/guide-zh/getting-started" lang="zh-Hans">
                  中文指南 <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className={styles.platforms} aria-label="Supported platforms">
                <span>Minecraft 26.1.2 / 26.2 / 26.3</span>
                <span>Paper / Folia</span>
              </div>
            </div>
            <Showcase />
          </section>

          <section className={styles.guideSection} aria-labelledby="guide-title">
            <div className={styles.sectionHeading}>
              <Heading as="h2" id="guide-title">Explore the guide</Heading>
              <div className={styles.changelogLinks}>
                <Link to="/docs/guide/changelog">Changelog</Link>
                <span aria-hidden="true">/</span>
                <Link to="/docs/guide-zh/changelog" lang="zh-Hans">更新日志</Link>
              </div>
            </div>
            <div className={styles.guideGrid}>
              {guides.map((guide) => (
                <article className={styles.guide} key={guide.number}>
                  <span className={styles.guideNumber} aria-hidden="true">{guide.number}</span>
                  <Heading as="h3">
                    <Link to={guide.to}>{guide.title}<span aria-hidden="true"> →</span></Link>
                  </Heading>
                  <p>{guide.description}</p>
                  <Link className={styles.englishGuideLink} to={guide.zhTo} lang="zh-Hans">
                    {guide.zh} <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.help} aria-label="More help">
            <span>Need a hand?</span>
            <div>
              <Link to="/docs/guide/troubleshooting">Troubleshooting</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/docs/guide-zh/troubleshooting" lang="zh-Hans">常见问题</Link>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
