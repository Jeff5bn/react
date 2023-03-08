import {useState} from "react";
import Sidebar from "./Sidebar";
import NoteEdit from "./NoteEdit";
import Header from "./Header";

export default function content({notes, addNote, sidebarvis,deleteNote,selectedNote,setSelectedNote, getSelectedNote, editNote, toggleEdit, newdate, newtitle, newbody,value, setValue, oldbody,toggleSidebar, notenum}){
    return(
      <>
      <Header toggleSidebar={toggleSidebar}/>
    <div id ="mainpage">
      <Sidebar notes={notes} addNote={addNote} sidebarvis={sidebarvis} selectedNote={selectedNote} setSelectedNote={setSelectedNote} toggleEdit={toggleEdit} notenum={notenum}/>
      <NoteEdit notes={notes} deleteNote={deleteNote} selectedNote={getSelectedNote()} editNote={editNote} toggleEdit={toggleEdit} newdate={newdate} newtitle={newtitle} newbody={newbody} value={value} setValue={setValue} oldbody={oldbody}/>
    </div>
    </>
    );
  }

