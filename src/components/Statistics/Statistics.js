import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>Good: {good}</li>
      <li className={css.statItem}>Neutral: {neutral}</li>
      <li className={css.statItem}>Bad: {bad}</li>
      <li className={css.statItem}>Total: {total}</li>
      <li className={css.statItem}>
        Positive feedback: {positivePercentage ? positivePercentage : 0} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
