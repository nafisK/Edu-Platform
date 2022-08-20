import React from "react";
import SideNav from "../Components/SideNav";
import Tabs from "../Components/TabComponents/Tabs";
import Video from "../Components/Video";

export default function VideoCall() {
  return (
    <div className="ml-[20%] h-screen">
      <SideNav />
      VideoCall
      <Tabs />
      <Video />
    </div>
  );
}
