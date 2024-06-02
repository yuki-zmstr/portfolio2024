import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
    return (
        <>
            <Header />
            <div className="content-wrapper">
                <Content client:load />
            </div>
            <Footer />
        </>
    )
}

export default App
