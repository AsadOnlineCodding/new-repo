import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    
    const handleClick = (e) => {
        e.preventDefault()
        let date = note.date;
        let parsedate = JSON.toString(date);
        console.log("new Date ", parsedate)
        
        if (note.title.length >= 3 && note.description.length >= 5 && note.tag.length >= 3) {
        

            addNote(note.title, note.description, note.tag);
            setNote({ title: "", description: "", tag: "", })
          
            props.showAlert("Note added SuccessFully", "success")
        } else {
            if ( note.tag.length < 3) {
                props.showAlert(`Tag must be 3 Character `, "danger")
            }
            
            if ( note.description.length < 5) {
                props.showAlert(`Description must be 5 Character `, "danger")
            }
            if (note.title.length < 3) {
                props.showAlert(`Title must be 3 Character `, "danger")
            }

        }
    }
    const onChange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3 ">
            <h2 style={{color:"White"}}>Add a Note</h2>
            <form className="my-3 w-40" >
                <div className="mb-3">
                    <label htmlFor='title' className="form-label text-white">Title</label>
                    <input type="text" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }}onChange={onChange} className="form-control border border-danger" name='title' value={note.title} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor='description ' className=" form-label text-white">Description</label>
                    <input type="text" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} className="form-control border border-danger" value={note.description} id="description" name='description' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor='tag ' className="form-label text-white">Tag</label>
                    <input type="text" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} className="form-control border border-danger" value={note.tag} id="tag" name='tag' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-dark border border-danger " onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
