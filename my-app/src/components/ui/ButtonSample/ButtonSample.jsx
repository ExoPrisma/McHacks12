import PropTypes from "prop-types";
import "./style.css";

const ButtonSample = ({ className, divClassName, text = "Text" }) => {
  return (
    <div className={`button-sample ${className}`}>
      <div className={`text ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonSample.propTypes = {
  className: PropTypes.string,    // className should be a string
  divClassName: PropTypes.string, // divClassName should be a string
  text: PropTypes.string,         // text should be a string
};

// Define default props
ButtonSample.defaultProps = {
  text: "Text",                   // Default value for text
};

export default ButtonSample
