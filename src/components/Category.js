import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../fetcher'
import CategoryProduct from './CategoryProduct';

const Category = () => {
    const {categoryId}=useParams()
    const [products,setProduct]=useState({errorMessage: '', data: [],});

    useEffect(()=>{
        const fetchData=async()=>{
        const responseObject= await getProducts(categoryId);
        setProduct(responseObject)
        console.log(products.data)
        };
        fetchData();
        },[]);


    const renderProducts = () => {
            return products.data?.map((d) =>(
                  <CategoryProduct key={d.id} {...d} >{d.title}</CategoryProduct>
                ));
            
              }

        
    return (
        <div>
        {products.errorMessage && <div>{products.errorMessage}</div>}
        <h1>Products</h1>
        <div>
        {products && renderProducts()}
        </div>
        
        </div>
    )
}

export default Category
