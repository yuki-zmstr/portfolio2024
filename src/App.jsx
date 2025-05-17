import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import MarkdownPage from "./components/MarkdownPage";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={
                <><Header />
                    <div className="content-wrapper">
                        <Content />
                    </div>
                <Footer /></>
            } />
            <Route path="/markdown/*" element={<MarkdownPage />} />
        </Routes>
    </Router>
  );
}

export default App;
