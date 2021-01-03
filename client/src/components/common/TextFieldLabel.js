import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldLabel = ({ labelFor, label, error }) => {
  return (
    <label
      htmlFor={labelFor}
      className={classnames('form-label', {
        'is-invalid': error,
      })}
    >
      {label}
    </label>
  );
};

TextFieldLabel.propTypes = {
  labelFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

TextFieldLabel.defaultProps = {
  type: 'text',
};

export default TextFieldLabel;
