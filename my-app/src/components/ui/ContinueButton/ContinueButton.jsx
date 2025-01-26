import PropTypes from "prop-types"
import "./style.css";

const ContinueButton = ({ className }) => {
  return (
    <button className={`continue-button ${className}`}>
      <div className="text">Continue</div>
    </button>
  );
};

ContinueButton.propTypes = {
  className: PropTypes.string     // Classname should be a string
};

export default ContinueButton
