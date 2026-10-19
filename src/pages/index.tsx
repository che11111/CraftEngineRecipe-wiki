import {useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const guides = [
  {
    number: '01',
    title: '安装与开始',
    description: '选好版本，安装插件，打开你的第一个菜单。',
    to: '/docs/guide-zh/getting-started',
    en: 'Getting started',
    enTo: '/docs/guide/getting-started',
  },
  {
    number: '02',
    title: '设置你的菜单',
    description: '调整分类、显示物品和隐藏规则。',
    to: '/docs/guide-zh/categories',
    en: 'Configure categories',
    enTo: '/docs/guide/categories',
  },
  {
    number: '03',
    title: '更新插件',
    description: '保留已有配置，按需更新资源包。',
    to: '/docs/guide-zh/updating',
    en: 'Update the plugin',
    enTo: '/docs/guide/updating',
  },
];

function Showcase() {
  const [playing, setPlaying] = useState(false);
  const screenshot = useBaseUrl('/img/2.png');
  const demo = useBaseUrl('/img/202610291172005.gif');

  return (
    <figure className={styles.showcase}>
      <div className={styles.showcaseTop}>
        <span className={styles.showcaseLabel}>
          <span className={styles.statusDot} aria-hidden="true" />
          游戏内预览 <span lang="en">/ IN GAME</span>
        </span>
        <span className={styles.showcaseCommand}>/cer</span>
      </div>
      <div className={styles.preview}>
        <img
          src={playing ? demo : screenshot}
          alt={playing ? '插件操作演示：浏览分类、查询配方和返回菜单' : '游戏内的工作台配方页面，展示材料与合成结果'}
          width="1338"
          height="944"
          fetchPriority="high"
        />
      </div>
      <figcaption className={styles.showcaseCaption}>
        <span>浏览物品，查看配方与用途。</span>
        <button
          type="button"
          className={styles.demoButton}
          onClick={() => setPlaying(!playing)}
          aria-pressed={playing}
          aria-label={playing ? '停止演示 / Stop demo' : '播放演示 / Play demo'}>
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
          {playing ? '停止演示' : '播放演示'}
          <span lang="en">{playing ? 'Stop' : 'Play'}</span>
        </button>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const logo = useBaseUrl('/img/CraftEngineRecipe.png');

  return (
    <Layout
      title="使用文档 · User Guide"
      description="CraftEngineRecipe 使用文档。安装插件、浏览配方、设置分类，以及更新插件。Chinese and English guides for CraftEngineRecipe.">
      <main className={styles.home}>
        <div className={styles.content}>
          <section className={styles.hero} aria-labelledby="home-title">
            <div className={styles.intro}>
              <div className={styles.brand}>
                <img src={logo} alt="" width="52" height="52" />
                <div>
                  <span className={styles.brandName}>CraftEngineRecipe</span>
                  <span className={styles.eyebrow}>使用文档 <span lang="en">/ USER GUIDE</span></span>
                </div>
              </div>
              <Heading as="h1" id="home-title" className={styles.title}>
                查配方，<br />找用途。
              </Heading>
              <p className={styles.description}>
                为 CraftEngine 打造的物品与配方浏览器。<br />
                从安装到菜单配置，这里带你轻松上手。
              </p>
              <p className={styles.englishDescription} lang="en">
                An item and recipe browser for CraftEngine.<br />
                Everything you need to get started.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryLink} to="/docs/guide-zh/getting-started">
                  中文指南 <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.secondaryLink} to="/docs/guide/getting-started" lang="en">
                  English Guide <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className={styles.platforms} aria-label="支持的平台">
                <span>Minecraft 26.1.2 / 26.2 / 26.3</span>
                <span>Paper / Folia</span>
              </div>
            </div>
            <Showcase />
          </section>

          <section className={styles.guideSection} aria-labelledby="guide-title">
            <div className={styles.sectionHeading}>
              <Heading as="h2" id="guide-title">从这里开始 <span lang="en">Explore the guide</span></Heading>
              <div className={styles.changelogLinks}>
                <Link to="/docs/guide-zh/changelog">更新日志</Link>
                <span aria-hidden="true">/</span>
                <Link to="/docs/guide/changelog" lang="en">Changelog</Link>
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
                  <Link className={styles.englishGuideLink} to={guide.enTo} lang="en">
                    {guide.en} <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.help} aria-label="更多帮助 / More help">
            <span>遇到问题？<span lang="en"> Need a hand?</span></span>
            <div>
              <Link to="/docs/guide-zh/troubleshooting">常见问题</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/docs/guide/troubleshooting" lang="en">Troubleshooting</Link>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
