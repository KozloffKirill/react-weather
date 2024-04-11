import React, { FC, useState } from 'react';
import sts from './Header.module.css';
import { Input } from '../../../shared/ui/input';
import { Button } from '../../../shared/ui/button';
import { SortButton } from '../../../features/weather/ui/sorting/SortButton';

export const Header: FC = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <header className={sts.header}>
      <div className={sts.container}>
        <section className={sts.sorting}>
          <Button>Кнопка</Button>
          <SortButton up />
        </section>
        <section>
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            onClear={() => setSearch('')}
          />
        </section>
        <section>Много фильтров много фильтров много фильтров</section>
      </div>
    </header>
  );
};
