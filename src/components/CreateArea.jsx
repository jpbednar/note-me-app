import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [editStyling, setEditStyling] = useState({
    rows: 1,
    zoom: false,
    titleInput: "hidden"
  });

  function handleAreaClick() {
    setEditStyling(() => {
      return { rows: 3, zoom: true, titleInput: "" };
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          type={editStyling.titleInput}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick={handleAreaClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={editStyling.rows}
        />

        <Zoom in={editStyling.zoom}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
