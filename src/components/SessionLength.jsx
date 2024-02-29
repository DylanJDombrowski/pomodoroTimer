import PropTypes from "prop-types";

const SessionLength = ({ sessionLength, onDecrement, onIncrement }) => {
  return (
    <div>
      <div id="session-label">Session Length</div>
      <button id="session-decrement" onClick={onDecrement}>
        -
      </button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

SessionLength.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default SessionLength;
