import { useCallback } from 'react';
import { navigationList } from '@/shared/components/Navigation/Navigation.data';
import styles from './Navigation.module.scss';
import { Teleport } from '@/shared/components/Teleport/Teleport';
import Link from 'next/link';
import classNames from 'classnames';

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
  return (
    <Teleport>
      <nav className={styles.navigation}>
        {
          <ul className={styles.links}>
            {navigationList.map((nav) => (
              <li
                key={nav.id}
                className={classNames(styles.link, nav.active && styles.link_visited)}
              >
                <Link href={nav.href}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        }
      </nav>
    </Teleport>
  );
};
