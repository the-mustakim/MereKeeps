import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
  
  
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title:"",desc:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.desc,note.tag);
  }

  const onChange=(e)=>{
      setNote({...note,[e.target.name]: e.target.value})
      //console.log(note)
  }

  return (
  
    <div>
         <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter Note Title"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              placeholder="Write note...."
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>
            Submit
          </button>
        </form>
        </div>
    </div>
  )
}
