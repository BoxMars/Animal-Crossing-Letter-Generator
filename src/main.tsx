import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import Introduction from "./routes/introduction";
import Library from "./routes/library";
import Editor from "./routes/editor";
import "./main.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="library" element={<Library />} />
      <Route path="editor" element={<Editor />} />
      <Route path="share" element={<Editor />} />
    </Routes>
  </HashRouter>
);