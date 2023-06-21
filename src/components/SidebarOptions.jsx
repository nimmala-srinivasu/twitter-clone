import React from "react";
import "./SidebarOptions.css";

export default function SidebarOptions({ active, text, Icon }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
