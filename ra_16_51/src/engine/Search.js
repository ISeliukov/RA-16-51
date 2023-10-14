import React, {useState} from 'react';
import { Tabs } from './Tabs';

const searchTabs = [
  {id: 1, title: 'Видео'},
  {id: 2, title: 'Картинки'},
  {id: 3, title: 'Новости'},
  {id: 4, title: 'Карты'},
  {id: 5, title: 'Маркет'},
  {id: 6, title: 'Переводчик'},
  {id: 7, title: 'Эфир'},
  {id: 8, title: 'Еще'},
];

/** Показывает форму поиска */
const SearchForm = props => {
  return (
    <div className="search-form">
      <input type="text" style={{width: '100%'}}/><input type="submit"/>
    </div>
  );
};

/**
 * Показывает блок поиска с лого
 */
const SearchBlock = () => {
  const [activeTab, setActiveTab] = useState('');
  const handleTabChange = () => {};

  return (
    <div className="search-block">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png" 
        alt="Яндекс"
        width="100"
      />
      <div>
        <Tabs tabs={searchTabs} handleTabChange={handleTabChange} activeTab={activeTab} />
        <SearchForm />
        <p>Найдется все! Например, Фаза луны сегодня</p>
      </div>
    </div>
  );
};

export { SearchBlock };
