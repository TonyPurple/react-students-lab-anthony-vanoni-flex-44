import React from "react";
import Scores from "../Scores/scores";

const Student = ({ name, bio, scores}) => {
  return (
    <div class="col s12 m8 offset-m2 l6 offset-l3">
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <div class="col s2">
        <h5 class="center-align">{name}</h5>
      </div>
        <div class="col s9">
          <p>{bio}</p>
          {scores.map(item => (
        <Scores scores={item.score} date={item.date} />
      ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Student;