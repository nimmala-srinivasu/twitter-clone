import React from "react";
import "./SidebarOptions.css";

export default function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
