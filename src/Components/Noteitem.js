import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
  
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote, showAlert } = props;
    console.log(note.date)
    const deletes = (e) => {
        deleteNote(note._id)
        showAlert("Deleted Successfully", "success")
    }
    return (
        <div className="col-md-3">
            <div className="card my-3 border border-danger">

                <div className="card-body " style={{ background: "rgb(2,0,36)", color: "white" }}>
                    <div className="d-flex justify-content-between ">
                        <h4 className="card-title" >{note.title}</h4>
                        <div>
                            <i className="fa-solid fa-trash-can mx-2" onClick={deletes}></i>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <button type="button" style={{fontSize:"14px", margin:"0px",padding:"3px"}}className="btn btn-primary position-relative">
                        {note.tag}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            new
                        </span>
                    </button>



                </div>
            </div>
        </div>
    )
}

export default Noteitem