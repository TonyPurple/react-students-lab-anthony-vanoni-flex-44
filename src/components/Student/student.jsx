import React from "react";
import Scores from "../Scores/scores";

const Student = ({ name, bio, scores}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{bio}</p>
      {scores.map(item => (
        <Scores scores={item.score} date={item.date} />
      ))}
    </div>
  );
};

export default Student;