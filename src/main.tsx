import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import Introduction from "./routes/introduction";
import Library from "./routes/library";
import Editor from "./routes/editor";
import "./main.css";

// Load local font file
const font = new FontFace("Seurat Pro B", "url(fonts/FOT-Seurat_Pro_B.otf)");
font.load().then(() => {
  document.fonts.add(font);
  console.log("Font loaded successfully");
}).catch(err => {
  console.error("Failed to load font", err);
});

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