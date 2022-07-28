import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';

const Notes = (props) => {
   const navigate = useNavigate();
    const context = useContext(noteContext);
    const {  getNotes } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }else{
                props.showAlert("Please First Login...","danger")
           
            
                navigate('/login');
           

        }
  
        // eslint-disable-next-line
    }, [])
    return (
        <>
        <AddNote showAlert={props.showAlert} />
      </>
    )
}

export default Notes