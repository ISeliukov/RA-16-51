import React from 'react';
import PropTypes from 'prop-types';

/** Показывает одну кнопку-таб */
const Tab = props => {
  return <button onClick={(e) => props.handleTabChange(e)} disabled={props.activeTab === props.children}>
    {props.children}
  </button>
}

Tab.propTypes = {
  /** Передает строку с активным табом (разделом) */
  activeTab: PropTypes.string.isRequired,
  /**
 * Обработчик, изменяющий активный раздел
 * @param {string} activeTab
 */
  handleTabChange: PropTypes.func.isRequired,
};

/** Показывает табы с блоками новостей */
const Tabs = props => {
  const { tabs, activeTab, handleTabChange } = props;
  return (
    <div>
      {
        tabs.map(tab => (
          <Tab key={tab.id} activeTab={activeTab} handleTabChange={handleTabChange}>{tab.title}</Tab>
        ))
      }
    </div>
  );
};

Tabs.propTypes = {
  /** Передает массив табов */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /** Передает строку с активным табом (разделом) */
  activeTab: PropTypes.string.isRequired,
  /**
 * Обработчик, изменяющий активный раздел
 * @param {string} activeTab
 */
  handleTabChange: PropTypes.func.isRequired,
};

export { Tabs };
