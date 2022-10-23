import PropTypes from 'prop-types';
import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.section}>
      <p className={css.text}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
