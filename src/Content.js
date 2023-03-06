import {useState} from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";

export default function content({notes, addNote}){
    return(
    <div id ="mainpage">
      <Sidebar notes={notes} addNote={addNote}/>
      <Note />
    </div>
    );
  }

