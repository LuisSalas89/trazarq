import React, { useEffect } from 'react';
import "../styles/dictamen.css";

function Dictamen() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      window.open(`${process.env.PUBLIC_URL}/Dictamen.pdf`, '_blank');
    }
  }, [isMobile]);

  return (
    <div className="pdfContainer">
      {isMobile ? (
        <p>El dictamen debería abrirse automáticamente. Si no se abre, haz clic <a href={`${process.env.PUBLIC_URL}/Dictamen.pdf`} target="_blank" rel="noopener noreferrer">aquí</a>.</p>
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
