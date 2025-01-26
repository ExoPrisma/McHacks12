import PropTypes from "prop-types"
import "./style.css";


const ContinueButton = ({ className, onClick }) => {
  return (
    <button className={`continue-button ${className}`} onClick={onClick}>
      <div className="text">Continue</div>
    </button>
  );
};

ContinueButton.propTypes = {
  className: PropTypes.string, // Classname should be a string
  onClick: PropTypes.func,     // onClick should be a function
};

export default ContinueButton
