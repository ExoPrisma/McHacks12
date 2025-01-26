import React from "react";
import "./style.css";

const Status = () => {
  return (
    <div className="status">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Estimated Wait Time</div>

          <div className="overlap-group">
            <div className="wait-time">
              <div className="overlap-group-2">
                <div className="ellipse" />

                <img
                  className="group"
                  alt="Group"
                  src="https://c.animaapp.com/afb8ZMrR/img/group-2@2x.png"
                />

                <div className="ellipse-2" />

                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/afb8ZMrR/img/rectangle-4.svg"
                />
              </div>
            </div>

            <div className="text-wrapper-2">00:00</div>

            <p className="p">
              Wait times may change as we prioritize urgent cases. Thank you for
              your patience.
            </p>
          </div>

          <div className="overlap-2">
            <div className="text-wrapper-3">Triage Level</div>

            <div className="triage-level-block">
              <div className="overlap-3">
                <div className="overlap-group-3">
                  <div className="text-wrapper-4">Triage Level</div>

                  <div className="text-wrapper-5">3</div>
                </div>

                <div className="text-wrapper-6">Urgent Care</div>
              </div>
            </div>
          </div>

          <div className="current-status-block">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <div className="text-wrapper-7">Current Status</div>

                <div className="text-wrapper-8">Triaged</div>
              </div>
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-9">Arrival Time</div>

              <div className="text-wrapper-10">13:45</div>
            </div>
          </div>

          <div className="div-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-11">Time Elasped</div>

              <div className="text-wrapper-10">0:45</div>
            </div>
          </div>

          <p className="text-wrapper-12">
            You will be treated as soon as possible.
          </p>
        </div>

        <div className="text-wrapper-13">Hello, John Doe</div>

        <div className="text-wrapper-14">ID : anon_0000</div>
      </div>
    </div>
  );
};

export { Status };
