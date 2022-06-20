import Products from './components/Products';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Error from './components/Error';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products isOpen={isOpen} setIsOpen={setIsOpen}/>} />
        <Route path="/:name" element={<SingleProduct isOpen={isOpen} setIsOpen={setIsOpen}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
