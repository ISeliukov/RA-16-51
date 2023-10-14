import React from 'react';
import PropTypes from 'prop-types';

/**
 * Показывает секцию колонок
 */
const Section = props => {
  const {titleLink, children} = props;
  return (
    <div>
      {
        <h3>
          <a href={titleLink.href}>{titleLink.title}</a>
        </h3>
      }
      {
        children
      }
    </div>
  );
};

Section.propTypes = {
  titleLink: PropTypes.shape({
  /**
 * Название секции
 */
    title: PropTypes.string.isRequired,
  /**
 * Адрес ссылки секции
 */
    href: PropTypes.string.isRequired,
  }),
  /**
 * Иконка секции
 */
  adornment: PropTypes.node,
    /**
 * Содержимое секции
 */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.node,
    ),
    PropTypes.string,
    PropTypes.node,
  ])
};

export { Section };
