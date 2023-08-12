import "./App.css";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { MarkdownContextProvider } from "./context/MarkdownContext";


function App() {

  return (
 
      <MarkdownContextProvider>
        <Editor />
        <Preview />
      </MarkdownContextProvider>

  );
}

export default App;
