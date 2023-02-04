import NoteContext from "./noteContext";
import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  const getNotes = async () => {
    //API Call
    axios
      .get("http://localhost:5000/api/notes/fetchallnotes", {
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWMzMGMzMWNmNzRhZjhiY2FjZDc0In0sImlhdCI6MTY3NTE0MDIzM30.smH-WIHtOdeuwbJpotK5TshhcIM5Nn1IE1rI7cJ1gus",
        },
      })
      .then(
        (response) => {
          //debugger;
          //console.log(response.data);
          setNotes(response.data);
        },
        (error) => {
          //debugger;
          //console.log(error);
        }
      );
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    const data = JSON.stringify({ title, description, tag });
    //console.log(data);
    const options = {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWMzMGMzMWNmNzRhZjhiY2FjZDc0In0sImlhdCI6MTY3NTE0MDIzM30.smH-WIHtOdeuwbJpotK5TshhcIM5Nn1IE1rI7cJ1gus",
      },
    };

    axios.post("http://localhost:5000/api/notes/addnote", data, options).then(
      (response) => {
        //console.log(response);
        setNotes(notes.concat(response.data));
      },
      (error) => {
        //debugger;
        //console.log(error);
      }
    );
  };

  //Delete a Note
  const deleteNote = async (id) => {
    
    //API Call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    axios
      .delete(`${host}/api/notes/deletenote/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWMzMGMzMWNmNzRhZjhiY2FjZDc0In0sImlhdCI6MTY3NTE0MDIzM30.smH-WIHtOdeuwbJpotK5TshhcIM5Nn1IE1rI7cJ1gus",
        },
      })
      .then(
        (response) => {
          //debugger;
          //console.log(response.data);
          setNotes(newNotes);
        },
        (error) => {
          //debugger;
          //console.log(error);
        }
      );
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const data = JSON.stringify({ title, description, tag });
    //console.log(data);
    const options = {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWMzMGMzMWNmNzRhZjhiY2FjZDc0In0sImlhdCI6MTY3NTE0MDIzM30.smH-WIHtOdeuwbJpotK5TshhcIM5Nn1IE1rI7cJ1gus",
      },
    };

    axios.put(`${host}/api/notes/updatenote/${id}`, data, options).then(
      (response) => {
        //console.log(response);
        // Logic to edit in client
        //we can can change the state directly so we have to create another note
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        //console.log(newNotes)
        setNotes(newNotes);
      },
      (error) => {
        debugger;
        //console.log(error);
      }
    );
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
