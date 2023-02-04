import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote(props) {
  
  
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title:"",desc:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.desc,note.tag);
    props.showAlert("Note Added","success")
    setNote({title:"",desc:"",tag:""})
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
              value={note.title}
              minLength={5}
              required
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
              value={note.desc}
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Add tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          <button disabled={note.title.length<5 || note.desc.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>
            Add Note
          </button>
        </form>
        </div>
    </div>
  )
}
