'use client';
import styles from './page.module.scss';
import classNames from 'classnames';
import { Button } from '@/shared/components/Button/Button';
import { Navigation } from '@/shared/components/Navigation/Navigation';
import { Logo } from '@/shared/components/Logo/Logo';
import { Title } from '@/shared/components/Title/Title';
import { SocialNetwork } from '@/shared/components/SocialNetwork/SocialNetwork';
export default function Home() {
  return (
    <main className={styles.container}>
      <section className={classNames(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetwork />
          <Button withCorners>Whitepaper</Button>
        </header>
        <Navigation />
        {/*<Navigation />*/}
        <div className={styles.title}>
          <Title size="xl">from dusk to&nbsp;dawn</Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>Mint</Button>
            </li>
            <li>
              <Button onClick={() => {}}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
