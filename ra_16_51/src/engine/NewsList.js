import React from 'react';
import PropTypes from 'prop-types';

const news = [
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин упростил получение автомобильных номеров', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'В команде Зеленского раскрыли план реформ на Украине', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: '"Турпомощь" прокоментировала гибель десятков в Анталье', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=l', title: 'Суд закрыл дело Демпартии США против России', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=p', title: 'На Украине призвали создать ракеты для удара по Москве', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Ура Ура Ура', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Ку-ку Ку-ку Ку-ку', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=d', title: 'Ква-ква Ква-ква Ква-ква', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=d', title: 'Бум-бум Бум-бум Бум-бум', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Ту-ту Ту-ту Ту-ту', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=r', title: 'Пейте свежие соки из яблок', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Пейте свежие соки из груш', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=r', title: 'Пейте свежие соки из ананасов', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Пейте свежие соки из винограда', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=o', title: 'Пейте свежие соки из апельсинов', category: 'Рекомендуем'}
];

/** Отображает блок новостей*/
const NewsList = props => {
  return (
    <div>
      {
        news
          .filter(item => item.category === props.activeTab)
          .map((item, i) => (
              <div key={i}>
                <img src={item.pic} alt={item.title} />
                <a href='#' >{item.title}</a>
              </div>
            )
          )
      }
    </div>
  );
};

NewsList.propTypes = {
  /** Передает строку с активным разделом новостей */
  activeTab: PropTypes.string.isRequired,
};

export { NewsList };
