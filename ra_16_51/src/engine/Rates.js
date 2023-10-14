import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { NewsHeader } from './NewsHead';
import { NewsList } from './NewsList';

const assets = [
  {name: 'USD MOEX', rate: '$63.5', dayChange: '+0.09'},
  {name: 'EURO MOEX', rate: '$70.86', dayChange: '+0.14'},
  {name: 'НЕФТЬ', rate: '$64.9', dayChange: '+1.63'},
];

/** Показывает один актив (название, цену и изменение за день) */
const Rate = ({asset}) => {
  return (
    <p className="rate">
      <span className="rate-span">{asset.name}</span>
      <span className="rate-span">{asset.rate}</span>
      <span className="rate-span">{asset.dayChange}</span>
    </p>
  )
};

Rate.propTypes = {
  /** Объект с данными об активе */
  asset: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    rate: PropTypes.string.isRequired, 
    dayChange: PropTypes.string.isRequired,
  })
}

/** Показывает строку с активами (текущие цены на валюты, акции и т.д.) */
const Rates = () => {
  return (
    <div className="rates">
      {
        assets.map((item, i) => <Rate key={i} asset={item} />)
      }
    </div>
  );
};

/**
 * Показывает блок новостей
 */
const News = () => {
  const [activeTab, setActiveTab ] = useState('Сейчас в СМИ');
  const handleTabChange = (e) => {
    //...
    //setActiveTab(...)
  }

  return (
    <div>
      <NewsHeader activeTab={activeTab} handleTabChange={handleTabChange} />
      <NewsList activeTab={activeTab} />
      <Rates />
    </div>
  );
};

export { News };
