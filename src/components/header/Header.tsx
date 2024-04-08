import React, { FC } from 'react';
import sts from './Header.module.css';
import SortButton from '../sort-button/SortButton';

const Header: FC = () => {
  return (
    <header className={sts.header}>
      <div className={sts.container}>
        <section className={sts.sorting}>
          <SortButton />
          <SortButton up />
        </section>
        <section className={sts.search}>
          <input type="text" />
        </section>
        <section className={sts.filtration}>Много фильтров много фильтров много фильтров</section>
      </div>
    </header>
  );
};

export default Header;
