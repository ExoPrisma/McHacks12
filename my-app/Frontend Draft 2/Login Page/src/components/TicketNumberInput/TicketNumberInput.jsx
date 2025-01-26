/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TicketNumberInput = ({ stateProp }) => {
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
