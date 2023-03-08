import { getValue } from "@testing-library/user-event/dist/utils";
import ReactQuill from 'react-quill';
import {useRef} from "react";
import TextEditor from "./TextEditor";
import { Link } from "react-router-dom";
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


export default function noteEdit({notes ,deleteNote, selectedNote, editNote ,toggleEdit, newdate, newtitle ,newbody ,value, setValue, oldbody}){

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
                <Link to={'/notes/1/edit'} id="savebutton">
                <div id="savebutton" onClick={()=>editNote()}>Edit</div>
                </Link>
                <div id="deletebutton" onClick={() => deleteNote(selectedNote.id)}>Delete</div>
            </div>
            <div id="notebody">
            <td dangerouslySetInnerHTML={{__html: selectedNote.body}} />
            </div>
        </div>
       
        </>
    );
        }
    }
    else{
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      
        /* remove second/millisecond if needed - credit ref. https://stackoverflow.com/questions/24468518/html5-input-datetime-local-default-value-of-today-and-current-time#comment112871765_60884408 */
        now.setMilliseconds(null)
        now.setSeconds(null)

        
        return (<>
            <div id="note">
            <div id="noteheader">
                <div id="leftside">
                    <input id="notetitle"  type="text" defaultValue={selectedNote.title} onChange={newtitle}></input>
                    <input id="editdatetimeside" type="datetime-local"  defaultValue={now.toISOString().slice(0, -1)} onChange={newdate}/>
                </div>
                <Link to={'/notes/1'} id="savebutton">
                <div id="savebutton" onClick={()=>editNote()}>Save</div>
                </Link>
                <div id="deletebutton" onClick={() => deleteNote(selectedNote.id)}>Delete</div>
            </div>
            <div id="maintext">
            <TextEditor newbody={newbody} oldbody={oldbody}/>
          
         </div>
        </div>
       
        </>
    );
    }
}

