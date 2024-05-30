import style from './Title.module.scss';
import cl from 'classnames';
import React from 'react';

export type TiTleSize = 'm' | 'l' | 'xl' | 'xxl';

interface TitleOwnProps {
  children: React.ReactNode;
  size?: TiTleSize;
}

type TitleProps<T extends React.ElementType> = TitleOwnProps & {
  as?: T;
} & React.ComponentProps<T>;

export const Title = <T extends React.ElementType = 'h2'>({
  as,
  children,
  size = 'm',
  ...restProps
}: TitleProps<T>) => {
  const Component = as || 'h2';
  return (
    <Component className={cl(style.title, style[`title_${size}`])} {...restProps}>
      {children}
    </Component>
  );
};
