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
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PremIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
