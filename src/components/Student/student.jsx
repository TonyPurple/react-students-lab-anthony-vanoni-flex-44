import React from "react";

const Student = ({ name, bio}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Student;