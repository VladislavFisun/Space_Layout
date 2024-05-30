import { generateSocialList } from '@/shared/components/SocialNetwork/SocialNetworkData';
import styles from './SocialNetwork.module.scss';
import { useCallback } from 'react';

interface SocialNetworkProps {}

export const SocialNetwork = ({}: SocialNetworkProps) => {
  const createSocialList = useCallback(() => generateSocialList(), []);
  return <div className={styles.socialContainer}>{createSocialList()}</div>;
};
