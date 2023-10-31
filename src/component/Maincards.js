import React, { useEffect, useState } from "react";
import "../styles/maincards.css";
import Cards from "./Cards";
import axios from "axios";

export default function Maincards({ data = [] }) {
  const [loading, setLoading] = useState(6);

  // const loadMore = () => {
  //   setLoading(loading + loading);
  // };
  return (
    <div>
      <div className="scrollable-container">
        <div className="scrollable-content">
          {data.slice(0, loading).map((item) => {
            return <Cards {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
