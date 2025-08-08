import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import Introduction from "./routes/introduction";
import Library from "./routes/library";
import Editor from "./routes/editor";
import FoundBottle from "./routes/found-bottle";
import SentBottle from "./routes/sent-bottle";
import "./main.css";
import Waves from "./components/Waves/Waves";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <HashRouter>
    <Waves type="back"/>
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="library" element={<Library />} />
      <Route path="editor" element={<Editor />} />
      <Route path="share" element={<Editor shareMode />} />
      <Route path="found-bottle" element={<FoundBottle />} />
      <Route path="sent-bottle" element={<SentBottle />} />
    </Routes>
    <Waves type="front"/>
  </HashRouter>
);