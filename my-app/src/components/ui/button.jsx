import PropTypes from 'prop-types';

export const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Validates children
  onClick: PropTypes.func,             // Validates onClick as a function
  type: PropTypes.string,              // Validates type as a string
  className: PropTypes.string,         // Validates className as a string
};

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  className: '',
};