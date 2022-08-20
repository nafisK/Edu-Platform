import React from "react";
import {} from "../Assets/images/imageindex";

const TeamCard = (props) => {
  const {
    pic,
    name,
    email,
    points,
  } = props;

  return (
    <div className="teamcard">
      <div className='teamPic round'>
        <img src={pic}/>
      </div>
      <div className="teamText">
        <h3>{name}</h3>
        <body>{email}</body>
      </div>
      <div className="teamPoints">
        <body>{points + " points"}</body>
      </div>
    </div>
  );
};

export default TeamCard;