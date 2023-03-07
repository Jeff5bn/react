import {useState} from "react";

export default function Header({toggleSidebar}){
    return(
      <div id="header">
        <div id="sidebarbutton" onClick={toggleSidebar}> &#9776; </div>
        <div id="headtext">
        <h1>Lotion</h1>
        <h4 id="subtext">Like Notion, but worse</h4>
        </div>
        <div id="sidebarbuttona"></div>
      </div>
    );
  }

  function toggleSidebar(){
    return null;
  }
