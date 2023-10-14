import React from 'react';
import PropTypes from 'prop-types';

  /**
 * Отображает элемент секции
 */
const SectionItem = props => {
  const {type, children, description} = props;
  if (type === 'frequented') {
    return (
      <div>
        {
          children
        }
        {
           ` - ${description}`
        }
      </div>
    )}
  // if (type === 'tv') {
  //   return (
  //     ...
  // )}
  // if (type === 'radio') {
  //   return (
  //     ...
  // )}
};

SectionItem.propTypes = {
  /**
 * Тип элемента - обязательный элемент
 */
  type: PropTypes.oneOf(['frequented', 'tv', 'radio']).isRequired,
  /**
 * Ссылка - обязательный элемент
 */
  children: PropTypes.node.isRequired,
  /**
 * Описание ссылки
 */
  description: PropTypes.string,
  /**
 * Ссылка на канал
 */
  channel: PropTypes.node,
  /**
 * Иконка
 */
  adornment: PropTypes.node,
};

export { SectionItem };
