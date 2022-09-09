import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './Component.css';

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new Worker(
    new URL('pdfjs-dist/legacy/build/pdf.worker', import.meta.url)
  )
}

export default function Component({file, close}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () =>
    setPageNumber(prev => prev - 1);

  const goToNextPage = () =>
    setPageNumber(prev => prev + 1);


  return (
    <div className='wrapper'>
    <Document
      file={file}
      renderMode="canvas"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {<Page pageNumber={pageNumber} />}
		</Document>

      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" onClick={goToPrevPage}>
          Previous
        </button>
        <button
          type="button"
          onClick={goToNextPage}
        >
          Next
        </button>
        <button onClick={close}>Close</button>
      </div>
</div>
  )
}
