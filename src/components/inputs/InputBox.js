import React, { Fragment } from 'react';
import RoundedButton from '../roundedButton/RoundedButton';

const InputBox = ({ inputName, inputValue, onInputChange, inputStyle, lable, showMandatory }) => {
  return (
    <Fragment>
      {lable && <span>
        {lable}
      </span>}
      <input className={`${inputStyle} ${showMandatory && 'mandatoryInput'}`} type="text" name={inputName} value={inputValue} onChange={onInputChange} />
      {showMandatory && <span className="text-danger">This Field is Required</span>}
    </Fragment>

  );
};
export default InputBox;
