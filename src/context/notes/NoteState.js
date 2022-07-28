import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  //get a Note
 
  const getNotes = async () => {
    //todo api Call
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json)
    setNotes(json)
  }
  // Add a Note
  const addNote = async (title, description, tag) => {
    //todo api Call
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag })
    })
    // console.log("add a notes")
    const json = await response.json();
    setNotes(notes.concat(json));
  }
  //Delete A Note
  const deleteNote = async (id) => {
    // api call
    // console.log("Deleting the note with id =>" + id);
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json",
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((json) => { return json._id !== id })
    setNotes(newNotes)
  }
  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })

    })
    const json = await response.json();
    console.log(json);

let newNotes = JSON.parse(JSON.stringify(notes))
    // logic to design client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break;
      }

    }
    setNotes(newNotes);
  }
  // logic to  edit in client


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;


