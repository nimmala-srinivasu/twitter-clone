import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationNoneIcon from "@mui/icons-material/NotificationAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PremIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Search" />
      <SidebarOptions Icon={NotificationNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Mail" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Book" />
      <SidebarOptions Icon={ListAltIcon} text="List" />
      <SidebarOptions Icon={PremIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
    </div>
  );
}

export default Sidebar;
