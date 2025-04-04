import React from "react";
import { CatalogueButton } from "./catalogue-button";
import { Divider } from "antd";

const CatalogueList = () => {
  return (
    <div className="flex flex-col gap-3">
      {data.map(({ file, name, size }, index) => (
        <React.Fragment key={index}>
          <CatalogueButton file={file} name={name} size={size} />
          <Divider className="m-0" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CatalogueList;

const data = [
  {
    name: "Catalogue sơn Dulux 1",
    size: "123MB",
    file: "https://pdfobject.com/pdf/sample.pdf",
  },
  {
    name: "Catalogue sơn Dulux 1",
    size: "123MB",
    file: "https://s3.amazonaws.com/scschoolfiles/1893/jh_tech_training_lesson_1_handout_-_basics_of_google_doc.pdf",
  },
  {
    name: "Catalogue sơn Dulux 1",
    size: "123MB",
    file: "https://s3.amazonaws.com/scschoolfiles/1893/jh_tech_training_lesson_1_handout_-_basics_of_google_doc.pdf",
  },
];
