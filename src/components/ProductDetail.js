import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
import styled from "styled-components";

const ProductDetail = () => {
const [product,setProduct]=useState({errorMessage: '', data: {},});
const {productId}=useParams();  

useEffect(()=>{
const fetchData=async()=>{
const responseObject= await getProductById(productId);
setProduct(responseObject)
}
fetchData();
},[productId])
return ( 
   <>
   {/* hello{productId} title:{console.log(product.data.specs["capacity"])}  */}
   
   <ProductInfo>
                    <ProductInfoHeader>Dimensions</ProductInfoHeader>
                    <label>{product.data.specs?.dimensions}</label>
                </ProductInfo>

                {product.data.specs?.capacity && (
                    <ProductInfo>
                        <ProductInfoHeader>Capacity</ProductInfoHeader>
                        <label>{product.data.specs?.capacity}</label>
                    </ProductInfo>
                )}

   
   </>
  )
}

export default ProductDetail;
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;