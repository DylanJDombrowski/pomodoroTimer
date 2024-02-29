// src/components/BreakLength.js
import PropTypes from "prop-types";

const BreakLength = ({ breakLength, onDecrement, onIncrement }) => {
  return (
    <div>
      <div id="break-label">Break Length</div>
      <button id="break-decrement" onClick={onDecrement}>
        -
      </button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

BreakLength.propTypes = {
  breakLength: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default BreakLength;
