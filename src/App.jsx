import "./App.css";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Article />
      <Footer />
    </>
  );
}

export default App;
