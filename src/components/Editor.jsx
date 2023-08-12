import { useContext, useState } from "react";
import { MarkdownContext } from "../context/MarkdownContext";

export const Editor = () => {
  //Access the value of the context
  const { markdown, setMarkdown } = useContext(MarkdownContext);

  const [minimized, setMinimized] = useState(true);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const maxEditor = () => {
    minimized ? setMinimized(false) : setMinimized(true);
  };

  return (
    <>
      <div id="editor-heading" className="editor heading">
        <div className="container-heading">
          <i className="fa-solid fa-pen-to-square fa-xl"></i>
          <h3>Editor</h3>
          <span className="right-icon">
            <i
              className={
                minimized
                  ? "fa-solid fa-maximize fa-xl"
                  : "fa-solid fa-minimize fa-xl"
              }
              onClick={maxEditor}
            ></i>
          </span>
        </div>
      </div>
      <div
        className={minimized ? "editor-textarea" : "editor-textarea maximized"}
      >
        <textarea
          name="editor"
          id="editor"
          value={markdown}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};
