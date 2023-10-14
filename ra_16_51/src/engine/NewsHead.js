import React from 'react';
import { Tabs } from './Tabs';

const headerTabs = [
  {id: 1, title: 'Сейчас в СМИ'},
  {id: 2, title: 'В Германии'},
  {id: 3, title: 'Рекомендуем'},
];

/**
 * Показывает текущую дату
 */
const DateString = () => {
  return (
    <div>
      {new Date().toLocaleDateString()}
    </div>
  );
};

const NewsHeader = props => {
  const {activeTab, handleTabChange} = props;
  return (
    <div className="news-header">
      <Tabs tabs={headerTabs} activeTab={activeTab} handleTabChange={handleTabChange} />
      <DateString />
    </div>
  );
};

export { NewsHeader };
