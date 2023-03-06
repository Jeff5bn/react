import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import Content from "./Content";
function App() {
  const [notes, setnotes] = useState([]);
  const addNote = () => {
    console.log("a");
    const newnote = {
      id: uuidv4(),
      title:"Untitled Note",
      body:"",
      datetime:"a"
    };
    setnotes([newnote,...notes]);
  }
  return (
    <>
      <Header />
      <Content notes={notes} addNote={addNote}/>
    </>
  );
}

export default App;


