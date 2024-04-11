import React, { FC, useState } from 'react';
import sts from './Header.module.css';
import { SortButton } from '../../../features/weather/ui/sorting/SortButton';
import { SearchInput } from '../../../features/weather/ui/search';

export const Header: FC = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <header className={sts.header}>
      <div className={sts.container}>
        <section className={sts.sorting}>
          <SortButton />
          <SortButton up />
        </section>
        <section className={sts.search}>
          <SearchInput
            value={search}
            onChange={e => setSearch(e.target.value)}
            onClear={() => setSearch('')}
          />
        </section>
        <section className={sts.filtering}>
          <SortButton up />
          <SortButton up />
          <SortButton up />
          <SortButton up />
          <SortButton up />
          <SortButton up />
        </section>
      </div>
    </header>
  );
};
