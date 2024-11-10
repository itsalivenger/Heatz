import "./App.css";
import Navbar from "./components/Nav/Navbar";
// import Home from "./pages/Home";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <div className={"App"}>
      <Navbar />
      {/* <Home /> */}
      <LoginPage />
    </div>
  );
}

export default App;