import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactQuill from 'react-quill';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  const [notes, setnotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [sidebarvis, setsidebarvis] = useState(true);
  const [selectedNote, setSelectedNote] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [value, setValue] = useState('');
  const [oldbody,setOldbody] = useState('');
  var { notenum } = useParams('');
  useEffect(() => {
    // storing input name
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = () => {
    if(!toggleEdit){
    const newnote = {
      id: uuidv4(),
      title:"Untitled Note",
      body:value,
      datetime: Date.now()
    };
    setnotes([newnote,...notes]);
    setSelectedNote(newnote.id)
    setToggleEdit(true);
  }
  else{
    const answer = window.confirm("Please Save changes for the current note before making a new one");
  }
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

  const editNote = (newtitle) =>{
    if(toggleEdit){
      
      const newnote  = {
        id: getSelectedNote().id,
        title:getSelectedNote().title,
        body:getSelectedNote().body,
        datetime: getSelectedNote().datetime
      };
      const deleteid = newnote.id
      setSelectedNote(false)
      const newnotes = notes.filter((note)=>note.id !== deleteid);
      setnotes([newnote,...newnotes])
      setSelectedNote(newnote.id)
      setToggleEdit(false);
    }
    else{
      setOldbody((notes.find((note)=> note.id ===selectedNote)).body)
      const newnote  = {
        id: getSelectedNote().id,
        title:getSelectedNote().title,
        body:getSelectedNote().body,
        datetime: Date.now()
      };
      const deleteid = newnote.id
      setSelectedNote(false)
      const newnotes = notes.filter((note)=>note.id !== deleteid);
      setnotes([newnote,...newnotes])
      
      setSelectedNote(newnote.id)
      setToggleEdit(true);
      
    }
    
  }

  const newtitle = (event) => {
    const newnote  = {
      id: getSelectedNote().id,
      title:event.target.value,
      body:getSelectedNote().body,
      datetime: getSelectedNote().datetime
    };
    const deleteid = newnote.id
    setSelectedNote(false)
    const newnotes = notes.filter((note)=>note.id !== deleteid);
    setnotes([newnote,...newnotes])

    setSelectedNote(newnote.id)
  }
  const newdate = (event) =>{
    const newnote  = {
      id: getSelectedNote().id,
      title:getSelectedNote().title,
      body:getSelectedNote().body,
      datetime: event.target.value
    };
    const deleteid = newnote.id
    setSelectedNote(false)
    const newnotes = notes.filter((note)=>note.id !== deleteid);
    setnotes([newnote,...newnotes])
    
    setSelectedNote(newnote.id)
  }
  const newbody=(event)=>{
    const newnote  = {
      id: getSelectedNote().id,
      title:getSelectedNote().title,
      body:event,
      datetime: getSelectedNote().datetime
    };
    const deleteid = newnote.id
    setSelectedNote(false)
    const newnotes = notes.filter((note)=>note.id !== deleteid);
    setnotes([newnote,...newnotes])
    
    setSelectedNote(newnote.id)
  }
  if(toggleEdit){
    
  }
  return (
    <BrowserRouter>
    <Routes>

      <Route  path="notes" element={<Content notes={notes} addNote={addNote} sidebarvis={sidebarvis} deleteNote={deleteNote} 
      selectedNote={selectedNote} setSelectedNote={setSelectedNote} getSelectedNote={getSelectedNote} editNote={editNote} 
      toggleEdit={toggleEdit} newdate={newdate} newtitle={newtitle} newbody={newbody} value={value} setValue={setValue} oldbody={oldbody} toggleSidebar={toggleSidebar}/>}></Route>

      <Route  path="notes/:notenum" element={<Content notes={notes} addNote={addNote} sidebarvis={sidebarvis} deleteNote={deleteNote} 
      selectedNote={selectedNote} setSelectedNote={setSelectedNote} getSelectedNote={getSelectedNote} editNote={editNote} 
      toggleEdit={toggleEdit} newdate={newdate} newtitle={newtitle} newbody={newbody} value={value} setValue={setValue} oldbody={oldbody} toggleSidebar={toggleSidebar} notenum={notenum}/>}></Route>

      <Route  path="notes/:notenum/edit" element={<Content notes={notes} addNote={addNote} sidebarvis={sidebarvis} deleteNote={deleteNote} 
      selectedNote={selectedNote} setSelectedNote={setSelectedNote} getSelectedNote={getSelectedNote} editNote={editNote} 
      toggleEdit={toggleEdit} newdate={newdate} newtitle={newtitle} newbody={newbody} value={value} setValue={setValue} oldbody={oldbody} toggleSidebar={toggleSidebar}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


