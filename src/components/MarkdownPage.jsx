import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import "highlight.js/styles/vs.css";
import './markdown-page.css'

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);
export default function MarkdownPage() {
  const location = useLocation();
  const [content, setContent] = useState("");

  useEffect(() => {
    const filePath = decodeURIComponent(location.pathname.replace("/markdown", ""));
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(marked.parse(text)))
      .catch((error) => setContent(error));
  }, [location.pathname]);

  return (
    <div
      className="max-w-4xl mx-auto mt-8"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
