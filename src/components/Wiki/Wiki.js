import React from "react";

// components
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

// styles
import { itemListWrapperStyle } from "../ItemList/style";

function Wiki({ markdown }) {
  // return <div style={itemListWrapperStyle}>Wiki</div>;
  return (
    <div style={{ ...itemListWrapperStyle, height: "auto" }}>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default Wiki;
