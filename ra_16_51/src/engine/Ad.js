import React from 'react';

/**
 * Показывает рекламный блок с текстом, картинкой и ссылкой
 */
const Ad = () => {
  return (
    <div className="ad">
      <img src="https://via.placeholder.com/180x140?text=ша/ща" alt="ща/ща"/><br />
      <a href="#">Работа над ошибками</a>
      <p>Смотрите на Яндексе и запоминайте</p>
    </div>
  );
};

export { Ad };
