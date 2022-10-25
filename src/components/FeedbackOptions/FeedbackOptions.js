import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegMehBlank, FaRegThumbsDown } from 'react-icons/fa';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      <li className={css.btnItem}>
        <FaRegThumbsUp className={css.btnIconGood} size={20} />

        <button
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(options[0])}
        >
          {options[0]}
        </button>
      </li>
      <li className={css.btnItem}>
        <FaRegMehBlank className={css.btnIconNeutral} size={20} />
        <button
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(options[1])}
        >
          {options[1]}
        </button>
      </li>
      <li className={css.btnItem}>
        <FaRegThumbsDown className={css.btnIconBad} size={20} />
        <button
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(options[2])}
        >
          {options[2]}
        </button>
      </li>

      {/* БЕЗ ІКОНОК */}
      {/* {options.map((option,i)=>{return (
        <li key={i} className={css.btnItem}>
          {option}
           <button
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback.handleChange(options[i])}
        ></button>
        </li>
      );}) } */}
      {/* БЕЗ ІКОНОК */}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
