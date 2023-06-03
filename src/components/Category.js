import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../fetcher'
import CategoryProduct from './CategoryProduct';

const Category = () => {
    
    const [products,setProducts]=useState({errorMessage: '', data: [],});
    const {categoryId}=useParams()
    
    useEffect(()=>{
        const fetchData=async()=>{
        const responseObject= await getProducts(categoryId);
        setProducts(responseObject)
      
        };
        fetchData();
        },[categoryId]);


    const renderProducts = () => {
            return products.data.map((d) =>(
                  <CategoryProduct key={d.id} {...d} >{d.title}</CategoryProduct>
                ));
            
              };

        
    return (
        <div>
        {products.errorMessage && <div>Error:{products.errorMessage}</div>}
       
        <div>
        {products && renderProducts()}
        </div>
        
        </div>
    );
};

export default Category;
