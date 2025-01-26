import PropTypes from "prop-types";
import "./style.css";

const ButtonSample = ({ className, divClassName, text, onClick }) => {
  return (
    <div className={`button-sample ${className}`} onClick={onClick}>
      <div className={`text ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonSample.propTypes = {
  className: PropTypes.string.isRequired,    // className is required
  divClassName: PropTypes.string.isRequired, // divClassName is required
  text: PropTypes.string,                    // text is optional, defaults to "Text"
  onClick: PropTypes.func,                   // onClick is a function prop
};

// Define default props
ButtonSample.defaultProps = {
  text: "Text",  // Default value for text
  onClick: () => {}, // Default empty function for onClick
};

export default ButtonSample;