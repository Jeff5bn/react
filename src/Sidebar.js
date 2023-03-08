import {useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function mustsave(){
    const answer = window.confirm("You must save the current Note!");
}
function convertbody(text){
    return (<tp dangerouslySetInnerHTML={{__html: text}}/>)
}

export default function sidebar({notes, addNote, sidebarvis, selectedNote, setSelectedNote, toggleEdit, notenum}){
    if(Array.from(notes).length===0){
        return (
            <div id="sidebar" className={`${sidebarvis ? "" : " hidden"}`}>
            <div id="sidebarTop">
                <h2 id="sideTitle">Notes</h2>
                <div id="addNoteButton" onClick={addNote}><p>+</p></div>
            </div>
            <div id="notelist">
            <p id="sidebarplace">No Note Yet</p>

            </div>
        </div>
        )
    }
    if(!toggleEdit)
    return (
        <div id="sidebar" className={`${sidebarvis ? "" : " hidden"}`}>
            <div id="sidebarTop">
                <h2 id="sideTitle">Notes</h2>
                <div id="addNoteButton" onClick={addNote}><p>+</p></div>
            </div>
            <div id="notelist">
            {Array.from(notes).map((note)=> (
                <>
                <div id="sidenote" className={`${(selectedNote===note.id) ? "selected" :""}`} onClick={() => setSelectedNote(note.id)}>
                     
                <h3 id="notetitle">{note.title}</h3>
                <p id="datetimeside">{new Date(note.datetime).toLocaleString("en-US", 
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                })}</p>
                <p id="notepreview">{convertbody(note.body.substring(0,100)+"...")}</p>
                </div>
                
                </>
            ))}

            </div>
        </div>
    );
    else{
        return (
            <div id="sidebar" className={`${sidebarvis ? "" : " hidden"}`}>
                <div id="sidebarTop">
                    <h2 id="sideTitle">Notes</h2>
                    <div id="addNoteButton" onClick={addNote}><p>+</p></div>
                </div>
                <div id="notelist">
                {Array.from(notes).map((note)=> (
                    
                    <div id="sidenote" className={`${(selectedNote===note.id) ? "selected" :""}`} onClick={() => mustsave()}>
                    <h3 id="notetitle">{note.title}</h3>
                    <p id="datetimeside">{new Date(note.datetime).toLocaleString("en-US", 
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    })}</p>
                    <p id="notepreview">{convertbody(note.body.substring(0,100)+"...")}</p>
                    </div>
                ))}
    
                </div>
            </div>
        );  
    }
}
