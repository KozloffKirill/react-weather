import React, { FC, ButtonHTMLAttributes } from 'react';
import sts from './Button.module.css';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={cn(sts.button, className)} {...props}>
      {children}
    </button>
  );
};
