import React from "react";

const Card = ({ h5, small, Icon }) => {
  return (
    <>
      <Icon className="about__icon" />
      <h5>{h5}</h5>
      <small>{small}</small>
    </>
  );
};

export default Card;
