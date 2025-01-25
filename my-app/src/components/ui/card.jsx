import PropTypes from 'prop-types';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div className={`p-4`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: '',
};