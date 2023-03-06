import {useState} from "react";
export default function sidebar({notes, addNote}){
    return (
        <div id="sidebar">
            <div id="sidebarTop">
                <h2 id="sideTitle">Notes</h2>
                <div id="addNoteButton" onClick={addNote}><p>+</p></div>
            </div>
            <div id="notelist">
            {Array.from(notes).map((note)=> (
                <div id="sidenote">
                <h3 id="notetitle">Title</h3>
                <p id="notepreview">Note preview</p>
                </div>
            ))}

            </div>
        </div>
    );
}
