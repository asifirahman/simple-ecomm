import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar"
import {Shop} from "./pages/shop/shop"
import {Cart} from "./pages/cart/cart"
import { CartContextProvider } from './utils/product-context';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
