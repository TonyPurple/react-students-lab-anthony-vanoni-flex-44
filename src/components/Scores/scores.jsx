import React from "react";

const Scores = ({ scores, date }) => {
  return (
    <table>
    <thead>
      <tr>
          <th>Score</th>
          <th>Date</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{scores}</td>
        <td>{date}</td>
      </tr>
    </tbody>
  </table>
  );
};

export default Scores;