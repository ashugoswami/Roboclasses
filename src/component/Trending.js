import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Maincards from "./Maincards";
import { dummyDataList } from "../utils/data";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Trending = () => {
  const [filteredData, setFilteredData] = useState(dummyDataList);

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 3 < filteredData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next(); // Auto-advance to the next set of cards
    }, 3000); // Change cards every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const displayedCards = filteredData.slice(currentIndex, currentIndex + 3);
  return (
    <>
      <div className="main">
        <Container
          sx={{
            py: "30px",
            textAlign: "start",
          }}
        >
          <div>
            <h2 className="fw-bold">Why study robotics and why with us?</h2>
            <p>Online learning offers a new way to explore</p>
            <h6 className="fw-bold">Why study with us?</h6>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="mt-4">
                <WorkspacesIcon className="icons" />
                <h5 className="fw-bold mt-3 mb-3">
                  STEM.org accredited certificate
                </h5>
                <h6>
                  On successfully completing the course, kids
                  <br /> are given STEM.Org accredited certificate
                </h6>
              </div>
              <div className="mt-4">
                <WorkspacesIcon className="icons" />
                <h5 className="fw-bold mt-3 mb-3">Specialized teachers</h5>
                <h6>
                  On successfully completing the course, kids
                  <br /> are given STEM.Org accredited certificate
                </h6>
              </div>
              <div className="mt-4">
                <WorkspacesIcon className="icons" />
                <h5 className="fw-bold mt-3 mb-3">24/7 support</h5>
                <h6>
                  On successfully completing the course, kids
                  <br /> are given STEM.Org accredited certificate
                </h6>
              </div>
            </div>

            <button className="join_btn mt-5">Free class</button>
            <div className="d-flex justify-content-between flex-wrap mt-5">
              <div>
                <h2 className="fw-bold">What's trending today</h2>
                <p className="mt-4">See age appropriate courses</p>
              </div>
              <div>
                <button className="see-allbtn mt-4">Show All</button>
              </div>
            </div>
          </div>
          <Maincards data={displayedCards} />
        </Container>
      </div>
    </>
  );
};

export default Trending;
