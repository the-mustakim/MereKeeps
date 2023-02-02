
import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState=(props)=>{
    const notesInitial=[
        {
            "_id": "63d8cc54485b974e4877d242b6",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:07:52.064Z",
            "__v": 0
          },
          {
            "_id": "63d8cc12645b974e4877d242b1",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:04.238Z",
            "__v": 0
          },
          {
            "_id": "63d8cc42675b974e4877d242c62",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.204Z",
            "__v": 0
          },
          {
            "_id": "63d8cc61275b974e4877d242c812",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d3238cc675b974e4877d2242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b92374e48772d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e42877d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          }
    ]

    
    const [notes,setNotes] = useState(notesInitial)

    //Add a Note
    const addNote=(title, description, tag)=>{
      //TODO : API Call
      console.log("Adding a new note")
      const note={
        "_id": "jdgn",
        "user": "63d5c30c31cf74af8bcacd74",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-01-31T08:08:07.390Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote=(id)=>{
      //TODO : API Call
      const newNotes=notes.filter((note)=>{ return note._id!==id})
      setNotes(newNotes)
      //console.log("Deleting a note:"+id)
    }

    //Edit a Note
    const editNote=(id,title, description,tag)=>{

    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;