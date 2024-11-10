import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import ProductsList from './components/productsList';

function App() {
  return (
    <div className="App bg-gray-950">
      <ProductsList></ProductsList>
      <Footer></Footer>
    </div>
  );
}

export default App;
