import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldLabel from './TextFieldLabel';

const TextFieldGroup = ({
  name,
  label,
  labelFor,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="mb-3">
      <TextFieldLabel labelFor={labelFor} label={label} />
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
