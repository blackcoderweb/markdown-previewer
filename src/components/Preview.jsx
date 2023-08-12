import { useContext } from "react";
import { MarkdownContext } from "../context/MarkdownContext";

// Importing react-marked library;
import Markdown from "marked-react";

export const Preview = () => {
  //Access the value of the context
  const { markdown } = useContext(MarkdownContext);

  return (
    <div id="preview_wrapper">
      <div id="preview" className="preview heading">
        <div className="container-heading">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          <h3>Preview</h3>
        </div>
      </div>
      <div className="preview-content">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};
