import { useReducer } from "react";
import PropTypes from "prop-types"
import "./style.css";

const TicketNumberInput = ({ stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`ticket-number-input ${state.state}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper">Enter ticket number here</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "click":
        return {
          state: "active",
        };
    }
  }

  if (state.state === "active") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
    }
  }

  return state;
}

TicketNumberInput.propTypes = {
  stateProp: PropTypes.string,    // stateProp should be a string
}

export default TicketNumberInput