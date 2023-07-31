import React, { useEffect, useState } from "react";
import Template from "../Template/Template";

import { Button } from "primereact/button";

import styles from "./ExportScreen.module.css";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDoc } from "firebase/firestore";

import { VscPreview } from "react-icons/vsc";
import { LuEdit2 } from "react-icons/lu";
import { AiTwotoneSave } from "react-icons/ai";
// import { convertComponentToJson } from "convert-react-to-json";

const ExportScreen = () => {
  const [isTemplateEditable, setIsTemplateEditable] = useState(true);
  const [preview, setPreview] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await setDoc(doc(db, "pdftemplates", serverTimestamp), {
  //       name: "Los Angeles",
  //       state: "CA",
  //       country: "USA",
  //     });
  //   };
  //   fetchData();
  // }, []);

  // function ComponentToJson(component) {
  //   const json = {
  //     type: component.type,
  //     props: component.props,
  //   };

  //   if (component.children) {
  //     json.children = component.children.map((child) =>
  //       convertComponentToJson(child)
  //     );
  //   }

  //   console.log(json);
  // }

  const exportToPDF = async (Template) => {
    const id = String(new Date().getMilliseconds());

    await setDoc(doc(db, "pdftemplates", id), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });

    setIsTemplateEditable(false);
    setPreview(true);
  };

  return (
    <div>
      <div className="PDFtemplate">
        <Template
          isTemplateEditable={isTemplateEditable}
          setIsTemplateEditable={setIsTemplateEditable}
          preview={preview}
          setPreview={setPreview}
        />
      </div>
      <div className={styles.previewBtn}>
        <Button
          label="Edit"
          onClick={() => {
            setIsTemplateEditable(true);
            setPreview(true);
          }}
        >
          <LuEdit2 />
        </Button>
        <Button
          label="Set Preview"
          onClick={() => {
            setIsTemplateEditable(false);
            setPreview(true);
          }}
        >
          <VscPreview />
        </Button>
        <Button label="Save Template" onClick={() => exportToPDF(Template)}>
          <AiTwotoneSave />
        </Button>
      </div>
    </div>
  );
};

export default ExportScreen;
