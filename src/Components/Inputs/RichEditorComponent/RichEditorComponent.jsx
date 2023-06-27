import React, { useState } from "react";
import { Editor } from "primereact/editor";

const RichEditorComponent = () => {
  const [text, setText] = useState("");

  return (
    <Editor
      value={text}
      onTextChange={(e) => setText(e.htmlValue)}
      style={{ height: "200px" }}
    />
  );
};

export default RichEditorComponent;
