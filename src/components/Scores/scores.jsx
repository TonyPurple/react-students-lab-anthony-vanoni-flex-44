import React from "react";

const Scores = ({ scores, date }) => {
  return (
    <div className="container">
    <li>
      {scores} on {date}
    </li>
    </div>
  );
};

export default Scores;