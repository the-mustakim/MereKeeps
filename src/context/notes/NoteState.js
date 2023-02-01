
import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState=(props)=>{
    
    const [state, setState] = useState()

    const notesInitial=[
        {
            "_id": "63d8cc585b974e4877d242b6",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:07:52.064Z",
            "__v": 0
          },
          {
            "_id": "63d8cc645b974e4877d242b8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:04.238Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e4877d242c6",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.204Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e4877d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e4877d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e4877d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          },
          {
            "_id": "63d8cc675b974e4877d242c8",
            "user": "63d5c30c31cf74af8bcacd74",
            "title": "My title",
            "description": "Pleses wake up early",
            "tag": "personal",
            "date": "2023-01-31T08:08:07.390Z",
            "__v": 0
          }
    ]

    const [notes,setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;