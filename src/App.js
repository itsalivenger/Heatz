import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import ProductPage from "./pages/ProductPage/ProductPage";
// import LoginPage from "./pages/Login/Login";
// import ResetPass from "./pages/ResetPass/ResetPass";
// import SignupPage from "./pages/signup/Signup";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={"App"}>
      <Navbar />
      {/* <Home />
      <SignupPage />
      <LoginPage />
      <ResetPass /> */}
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;