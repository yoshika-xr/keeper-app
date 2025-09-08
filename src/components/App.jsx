import React,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);

  function AddNote(newNote){
    setNotes(prevNotes=>{
      return[...prevNotes,newNote]
    })
    console.log(newNote)
  }
  return (
    <div> 
      <Header />
      <CreateArea 
      onAdd={AddNote}/>
     { notes.map(noteItem => {
       return <Note title={noteItem.title}
      content={noteItem.content} />
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
