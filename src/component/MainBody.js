import React, { useState } from "react";
import "../styles/main.css";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import Maincards from "./Maincards";
import { dummyDataList } from "../utils/data";

export default function MainBody() {
  const [filteredData, setFilteredData] = useState(dummyDataList);
  return (
    <div className="main">
      <Container
        sx={{
          py: "30px",
          textAlign: "start",
        }}
      >
        <div className="main-component">
          <div className="main-heading">
            <h2 className="fw-bold">Featured course</h2>
            <p className="mt-4">See age appropriate courses</p>
            <div className="filter-box">
              <div>
                <p className="mb-0">All age</p>
              </div>
              <div>
                <p className="mb-0">4 - 6 yrs</p>
              </div>
              <div>
                <p className="mb-0">6 - 9 yrs</p>
              </div>
              <div>
                <p className="mb-0">9 - 13 yrs</p>
              </div>
              <div>
                <p className="mb-0">13+ yrs</p>
              </div>
            </div>
            <div className="showall-box mt-5">
              <div>
                <h5 className="fw-bold">Robotics Courses</h5>
              </div>
              <div>
                <button className="see-allbtn">Show All</button>
              </div>
            </div>
          </div>
        </div>
        <Maincards data={filteredData} />
        <div className="showall-box mt-3 pe-5">
          <div>
            <h5 className="fw-bold">Coding Courses</h5>
          </div>
          <div>
            <button className="see-allbtn">Show All</button>
          </div>
        </div>
        <Maincards data={filteredData} />
        <div className="showall-box mt-3 pe-5">
          <div>
            <h5 className="fw-bold">STEM Courses</h5>
          </div>
          <div>
            <button className="see-allbtn">Show All</button>
          </div>
        </div>
        <Maincards data={filteredData} />
      </Container>
    </div>
  );
}
