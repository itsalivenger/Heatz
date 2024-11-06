import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className={"App"}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;