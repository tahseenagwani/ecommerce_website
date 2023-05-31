import './App.css';
import { useEffect, useState } from 'react';
// import Category from './components/Category';
import { getCategories} from './fetcher';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import CheckOut from './components/CheckOut';
import Basket from './components/basket'
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
function App() {
  // const [products, setProducts] = useState({ errorMessage: '', data: [] });
  const [categories, setCategories] = useState({ errorMessage: '', data: [] })
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories()

      setCategories(responseObject)
      console.log(responseObject)
    }
    fetchData();
  }, [])

  
  


  
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Layout categories={categories} />}>
        <Route index element={<Home/>}></Route>
      <Route path='basket' element={ <Basket />}/>
      <Route path='checkout' element={ <CheckOut />}/>
      <Route path='products/:productId' element={ <ProductDetail/>}/>
      <Route path='categories/:categoryId' element={ <Category/>}/>
    </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
