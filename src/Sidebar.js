import { ImportExportRounded } from "@material-ui/icons";
import React from "react";
import "./Sidebar.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import InboxIcon from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div class="sidebar__info">
          <h2>Aditya's Slack</h2>
          <h3>
            {/* the green online icon */}
            <FiberManualRecordIcon />
            Aditya Tiwari
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Comment" />
      <SidebarOption title="Youtube" />
      <SidebarOption Icon={DraftIcon} title="Comment" />
      <SidebarOption title="Youtube" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />
      <SidebarOption Icon={FileCopyIcon} title="Comment" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={InboxIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="ShowLess" />
      <hr />
      <SidebarOption Icon={InboxIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="ShowLess" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />

      {/* connect to dB and list all the channels */}

    </div>
  );
}

export default Sidebar;
