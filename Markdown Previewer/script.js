import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useState } from "https://cdn.skypack.dev/react@17.0.1";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.3/marked.min.js";

function ReactApp() {
  const [markdown, setMarkdown] = useState((`# Markdown Previewer

## Introduction

This is a simple Markdown previewer built with React. It allows you to enter Markdown text in the editor and see the rendered HTML in real-time in the preview panel.

### Features

- Syntax highlighting for code blocks
- Automatic line breaks for paragraphs
- Support for all standard Markdown syntax

#### Code Example

Here's an example of a code block in JavaScript:

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

Here's another example of code in JavaScript.
\`const message = 'Hello, world!';\`
                                            
#### Link Example

Here's a link to [Google](https://www.google.com).

#### Image Example

Here's an image of a cute kittens:

![Kittens](https://www.petmd.com/sites/default/files/petmd-kitten-facts.jpg)

#### Bold Example

This text is **bold**.

#### Blockquote Example

> The best way to predict the future is to create it.`));
  
  function handleChange(event) {
    setMarkdown(event.target.value);
  }
  const renderMarkdown = () => {
    const html = marked(markdown, { breaks: true });
    return { __html: html };
  };
  
  return(
    <div>
      <textarea id="editor" onChange={handleChange} value={markdown} />
      <div className="Preview" id="preview" dangerouslySetInnerHTML={renderMarkdown()} />
    </div>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));