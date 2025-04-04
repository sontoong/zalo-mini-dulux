import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { pdfjs, Document, Page as PDFPage } from "react-pdf";
import { useContainerSize } from "../hooks/useContainerSize";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const maxWidth = 800;

const ViewPDFPage = () => {
  const location = useLocation();
  const state = location.state as { name: string; file: string } | undefined;
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { containerRef, width: containerWidth } = useContainerSize();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  if (!state) {
    return <div>Error: No contract data found.</div>;
  }

  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header title={state.name} className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-4">
        <div ref={containerRef} className="shadow-pdf">
          <Document
            file={state.file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error("Error loading PDF:", error)}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <PDFPage
                key={`page_${index + 1}`}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                customTextRenderer={undefined}
                pageNumber={pageNumber}
                width={Math.min(containerWidth, maxWidth)}
              />
            ))}
          </Document>
        </div>
      </div>
    </Page>
  );
};

export default ViewPDFPage;
