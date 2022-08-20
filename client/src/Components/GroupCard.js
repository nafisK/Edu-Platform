import React from "react";
import {} from "../Assets/images/imageindex";

const GroupCard = (props) => {
  const {
    pic,
    team,
    members,
  } = props;

  return (
    <div className="groupcard">
      <span class="dot"></span>
      <div className='groupPic round'>
        <img src={pic}/>
      </div>
      <div className="groupText">
        <h3>{team}</h3>
        <body>{members + " members"}</body>
      </div>
    </div>
  );
};

export default GroupCard;