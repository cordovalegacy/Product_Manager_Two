import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import ProductForm from './components/ProductForm'
import Shop from './components/Shop'

function App() {

  const [productList, setProductList] = useState([])

  return (
    <BrowserRouter>
      <div className="bg-dark p-3">
        <nav className='d-flex p-4 justify-content-evenly'>
          <Link className='text-warning' to='/display'>Display All</Link>
          <Link className='text-warning' to='/create'>Create</Link>
        </nav>
        <Routes>
          <Route path='/display' element={<Shop productList={productList} setProductList={setProductList}/>} />
          <Route path='/create' element={<ProductForm productList={productList} setProductList={setProductList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
