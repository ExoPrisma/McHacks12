import ButtonSample from "../components/ui/ButtonSample/ButtonSample.jsx";
import HereIsASpaceFor from "../components/ui/HerelsASpaceFor/HereIsASpaceFor.jsx";
import "./tracker.css";

const TrackerPage = () => {
  // const { id } = useParams();

  return (
    <div className="tracker-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="background-blue"
            alt="Background blue"
            src="https://c.animaapp.com/V33MycHf/img/background-blue.svg"
          />

          <div className="background-white" />

          <div className="buttons">
            <ButtonSample
              className="track-wait-time"
              divClassName="button-sample-instance"
              text="Track wait time"
            />
            <ButtonSample
              className="translate-button"
              divClassName="button-sample-instance"
              text="Translate"
            />
          </div>

          <div className="symptoms-tracker">
            <ButtonSample
              className="save-button-symptoms"
              divClassName="design-component-instance-node"
              text="Save"
            />
            <div className="div">Symptoms tracker:</div>
          </div>

          <div className="appointment-goals">
            <ButtonSample
              className="save-button"
              divClassName="design-component-instance-node"
              text="Save"
            />
            <div className="text-wrapper-2">Appointment goals:</div>
          </div>

          <div className="instruction">
            <div className="overlap-group">
              <p className="hello-we-understand">

                <span className="text-wrapper-3">
                  We understand that waiting can be difficult, and we want to
                  assure you that our team is working tirelessly to provide the
                  best care possible. In the meantime, here’s a page for you or
                  a family member to write down points to bring up to the doctor
                  and track your symptoms.
                </span>
              </p>

              <div className="name-DATA">Hello John Doe,</div>
            </div>
          </div>

          <HereIsASpaceFor
            className="here-is-a-space-for-you-to-write-down-points-you-would-like-to-mention-once-you-see-the-physician"
            property1="default"
          />
          <div className="symptoms-tracker-2">
            <div className="DD-MM-YYYY">
              <div className="flexcontainer">
                <p className="span-wrapper">
                  <span className="span">
                    DD/MM/YYYY - 00:00
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="text-wrapper-4">
                    Enter your current symptoms
                  </span>
                </p>
              </div>
            </div>

            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="span-wrapper">
                  <span className="span">
                    DD/MM/YYYY - 00:00
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="text-wrapper-4">
                    Enter your current symptoms
                  </span>
                </p>
              </div>
            </div>

            <div className="flexcontainer-i-wrapper">
              <div className="flexcontainer">
                <p className="span-wrapper">
                  <span className="span">
                    DD/MM/YYYY - 00:00
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="text-wrapper-4">
                    Enter your current symptoms
                  </span>
                </p>
              </div>
            </div>

            <div className="div-wrapper">
              <div className="flexcontainer">
                <p className="span-wrapper">
                  <span className="span">
                    DD/MM/YYYY - 00:00
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="text-wrapper-4">
                    Enter your current symptoms
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default TrackerPage

