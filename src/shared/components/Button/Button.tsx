import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  withCorners?: boolean;
}

export const Button = ({
  children,
  className,
  withCorners = true,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={classNames(styles.artButton, className)} {...buttonProps}>
      <span className={styles.artButtonText}>{children}</span>
      {withCorners && <span className={styles.artButtonAngleLeft} />}
      {withCorners && <span className={styles.artButtonAngleRight} />}
    </button>
  );
};
