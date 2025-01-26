import { useReducer } from "react";
import PropTypes from "prop-types"
import "./style.css";

const HereIsASpaceFor = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`here-is-a-space-for ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <p className="text-wrapper">
        Here is a space for you to write down points you would like to mention
        once you see the physician.
      </p>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

HereIsASpaceFor.propTypes = {
  property1: PropTypes.string,    // property1 should be a string
  className: PropTypes.string,    // ClassName should be a string
}

export default HereIsASpaceFor
