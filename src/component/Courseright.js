import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const courseright = () => {
  return (
    <>
      <div className="student-box">
        <div className="speaker-box">
          <div>
            <h2 className="fw-bold mb-3">
              Which course is right for my child?
            </h2>
            <ui>
              <li className="mx-4">Which are the latest, in demand course?</li>
              <li className="mx-4">
                What age appropriate course is right for my child?
              </li>
              <li className="mx-4">
                How will my child use what he has learnt and how will it help
                him?
              </li>
            </ui>
            <p className="mt-3">
              Speak to our specialist who can guide you and help you decide.
            </p>
            <p>Message us on What's app and we'll call you right back.</p>

            <button className="freeClass-btn">
              {" "}
              <WorkspacesIcon className="icons" />
              &nbsp; Free class
            </button>
            <button className="courses-btn mx-4">
              {" "}
              <WorkspacesIcon className="icons" />
              &nbsp; Talk to us
            </button>
          </div>
          <div>
            <img
              src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/08/bb.png"
              alt="student"
              className="mx-5"
              height={450}
            />
          </div>
        </div>
        <div className="second-st"></div>
      </div>
    </>
  );
};

export default courseright;
