import GameIcon from '../../../../public/images/icons/discort_icon.svg';
import DiscordIcon from '../../../../public/images/icons/game_icon.svg';
import TwitterIcon from '../../../../public/images/icons/twitter_icon.svg';
import Link from 'next/link';
import styles from './SocialNetwork.module.scss';

type socialItem = {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
export const socialList: socialItem[] = [
  {
    icon: DiscordIcon,
    href: 'https://discordapp.com',
    id: Math.random().toString(36).slice(5),
  },
  {
    icon: GameIcon,
    href: 'https://opensea.io/collection/dusktopiaofficial',
    id: Math.random().toString(36).slice(5),
  },
  {
    icon: TwitterIcon,
    href: 'https://x.com',
    id: Math.random().toString(36).slice(5),
  },
];

export const generateSocialList = () => {
  return socialList.map((item) => (
    <Link target="_blank" key={item.id} href={item.href}>
      <item.icon className={styles.socialNetwork} />
    </Link>
  ));
};
