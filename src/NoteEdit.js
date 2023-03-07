import { getValue } from "@testing-library/user-event/dist/utils";
import ReactQuill from 'react-quill';
import {useState} from "react";

const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};
export default function noteEdit({notes ,deleteNote, selectedNote, editNote ,toggleEdit, newdate}){
    if(!toggleEdit){
    if(selectedNote===null){
        return (
            <div id="note">
                <div id="placeholderMain">Select Note, or create a new one.</div>
        </div>
        );
    }
    else{
    return (
        <>
        
        <div id="note">
            <div id="noteheader">
                <div id="leftside">
                    <h2>{selectedNote.title}</h2>
                    <p id="datetimeside">{new Date(selectedNote.datetime).toLocaleString("en-US", 
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                })}</p>
                </div>
                <div id="savebutton" onClick={()=>editNote()}>Edit</div>
                
                <div id="deletebutton" onClick={() => deleteNote(selectedNote.id)}>Delete</div>
            </div>
        </div>
       
        </>
    );
        }
    }
    else{
        return (<>
            <div id="note">
            <div id="noteheader">
                <div id="leftside">
                    <input id="notetitle" type="text" defaultValue={selectedNote.title}></input>
                    <input id="editdatetimeside" type="datetime-local"  defaultValue={formatDate(selectedNote.datetime)} onChange={newdate(getValue())}/>
                </div>
                <div id="savebutton" onClick={()=>editNote()}>Save</div>
                
                <div id="deletebutton" onClick={() => deleteNote(selectedNote.id)}>Delete</div>
            </div>
            <div id="maintext">
            <ReactQuill
            theme="snow"
            style={{height:"500px"}}
            modules={{
                toolbar: ['bold', 'italic', 'underline', 'link', 'code-block', 'list']
               }}

            />
         </div>
        </div>
       
        </>
    );
    }
}

