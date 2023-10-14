import React from 'react';
import './App.css';
import { News } from './engine/Rates';
import { Ad } from './engine/Ad';
import { SearchBlock } from './engine/Search';
import { Banner } from './engine/Banner';
import { Columns } from './engine/Columns';

function App() {
  return (
    <div className="App">
      <div className="prolog">
        <News />
        <Ad />
      </div>
      <SearchBlock />
      <Banner />
      <Columns />
    </div>
  );
}

export { App };
