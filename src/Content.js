import {useState} from "react";
import Sidebar from "./Sidebar";
import NoteEdit from "./NoteEdit";

export default function content({notes, addNote, sidebarvis,deleteNote,selectedNote,setSelectedNote, getSelectedNote, editNote, toggleEdit, newdate}){
    return(
    <div id ="mainpage">
      <Sidebar notes={notes} addNote={addNote} sidebarvis={sidebarvis} selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>
      <NoteEdit notes={notes} deleteNote={deleteNote} selectedNote={getSelectedNote()} editNote={editNote} toggleEdit={toggleEdit} newdate={newdate}/>
    </div>
    );
  }

