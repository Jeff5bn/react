import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import Content from "./Content";
import ReactQuill from 'react-quill';
function App() {
  const [notes, setnotes] = useState([]);
  const [sidebarvis, setsidebarvis] = useState(true);
  const [selectedNote, setSelectedNote] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const addNote = () => {
    const newnote = {
      id: uuidv4(),
      title:"Untitled Note",
      body:"",
      datetime: Date.now()
    };
    setnotes([newnote,...notes]);
    setSelectedNote(newnote.id)
  }

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

  const toggleSidebar = () =>{
    setsidebarvis(current => !current);
  }


  const deleteNote = (deleteid) => {
    const answer = window.confirm("Are you sure?");
    if (!answer) {

    }
    else{
    setnotes(notes.filter((note)=>note.id !== deleteid))
    if(notes.keys.length===0){
      setSelectedNote(false)
    }
    else{
    setSelectedNote((notes.at(0)).id)
    }
    if(toggleEdit)
    {
      setToggleEdit(current => !current);
    }
  }
  }

  const getSelectedNote = () => {
    if(selectedNote===false){
        return null
      }
    if(notes===null){
      return null
    }
    return notes.find((note)=> note.id ===selectedNote);
  }

  const editNote = () =>{
    setToggleEdit(current => !current);
    console.log(selectedNote.datetime)
  }

  const newdate = (when) =>{

  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <Content notes={notes} addNote={addNote} sidebarvis={sidebarvis} deleteNote={deleteNote} selectedNote={selectedNote} setSelectedNote={setSelectedNote} getSelectedNote={getSelectedNote} editNote={editNote} toggleEdit={toggleEdit} newdate={newdate}/>
    </>
  );
}

export default App;


