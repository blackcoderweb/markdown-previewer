import { createContext, useState } from "react";

// Create context
export const MarkdownContext = createContext();

// Create the context provider component
export const MarkdownContextProvider = ({ children }) => {

  const initialMarkdown = `
  # You can use ( # ) before your text for h1 heading

  ## You can use ( ## ) before your text for h2 heading
  ### And you can use ( ### ) before your text for h3 heading
  
  Between 2 backticks ( \`\` ) you can insert some code: \`<header></header>\`.
  
  You can insert multiline code as well using ( \`\`\` ) before and after your code...
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  For inserting **bold text** you can use ( ** ) before and after your text... 
  Or _italic_ using ( _ ) before and after your text...
  Or... combine them for **_bold and italic_**
  
  Using (\`~~\`) before and after ... you can ~~cross your text~~.
  
  Do you want to learn coding for free? Go to freeCodeCamp on this [link](https://www.freecodecamp.org)
  
  Do you want to cite your favorite quote and the author?
  Use ( > ) before the name:
  
  "... some quote"
  
  > -Author
  
  - And of course, there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  2. Use just 1s if you want!
  3. And last but not least, I want to thank to:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};
