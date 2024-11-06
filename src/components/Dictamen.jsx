import React from 'react';
import "../styles/dictamen.css";

function Dictamen() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="pdfContainer">
      {isMobile ? (
        <button
          onClick={() => window.open(`${process.env.PUBLIC_URL}/Dictamen.pdf`, '_blank')}
          className="pdfButton"
        >
          Abrir Dictamen
        </button>
      ) : (
        <iframe
          src={`${process.env.PUBLIC_URL}/Dictamen.pdf`}
          type="application/pdf"
          width="100%"
          height="100%"
          title="PDF Viewer"
        ></iframe>
      )}
    </div>
  );
}

export default Dictamen;

