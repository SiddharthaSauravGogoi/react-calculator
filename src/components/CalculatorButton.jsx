import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton(props) {

  return (
    <div className="square" onClick={() => props.getInput(props.children)} style={{ backgroundColor: props.style.backgroundColor }}>
      {props.children}
    </div>
  )
}

CalculatorButton.propTypes = {
  getInput: PropTypes.func,
  style: PropTypes.object,
};

export default CalculatorButton;