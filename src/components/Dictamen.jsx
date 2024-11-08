import React from 'react';
import "../styles/dictamen.css";

function Dictamen() {
  return (
    <div className="pdfContainer">
      <iframe
        src={`${process.env.PUBLIC_URL}/Dictamen.html`}
        width="100%"
        height="100%"
        title="HTML Viewer"
      ></iframe>
    </div>
  );
}

export default Dictamen;
