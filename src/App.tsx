import React, { FC } from 'react';
import sts from './App.module.css';
import { Header } from './widgets/weather/header';

const App: FC = () => {
  return (
    <main>
      <div className={sts.layout}>
        <section className={sts.weather}>
          <Header />
        </section>
        <section className={sts.map}></section>
      </div>
    </main>
  );
};

export default App;
