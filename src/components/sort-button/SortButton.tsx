import React, { FC } from 'react';
import sts from './SortButton.module.css';
import cn from 'classnames';

interface Props {
  up?: boolean;
}

const SortButton: FC<Props> = ({ up = false }) => {
  const [letterAbove, letterBelow] = up ? ['A', 'Я'] : ['Я', 'А'];

  return (
    <button className={sts.sortButton}>
      <div className={sts.arrowContainer}>
        <div className={cn(sts.arrow, { [sts.arrowUp]: up })} />
      </div>
      <div>
        {letterAbove} <br /> {letterBelow}
      </div>
    </button>
  );
};

export default SortButton;
