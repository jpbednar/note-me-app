import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function Header() {
  return (
    <header>
      <div className="headerbox">
        <div className="logo">
          <NoteAddIcon fontSize="medium" />
        </div>
        <div>
          <h1>NoteMe</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
