import styles from './Logo.module.scss';
import SvgLogo from '../../../../public/images/logo.svg';
import { SVGProps } from 'react';
import Link from 'next/link';

type TSVGElementProps = SVGProps<SVGSVGElement>;
interface LogoProps extends TSVGElementProps {
  path?: string;
}

export const Logo = ({ path = '/', ...logoProps }: LogoProps) => {
  const defaultProps = {
    width: 200,
    height: 46,
    ...logoProps,
  };
  return (
    <h1>
      <Link href={path}>
        <SvgLogo {...defaultProps} />
      </Link>
    </h1>
  );
};
