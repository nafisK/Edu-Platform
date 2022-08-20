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
      <span class="groupAdd">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2222 0L10.2222 20M20 10.2222L0 10.2222" stroke="black" stroke-opacity="0.25" stroke-width="2"/>
      </svg>
      </span>
    </div>
  );
};

export default GroupCard;