import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';

const ProductDetail = () => {
  const [product,setProduct]=useState({errorMessage:"",data:[]})

  const params=useParams();
  
  useEffect(()=>{
const fetcher=async()=>{
 const responseObject=await getProductById(params.productId)
setProduct(responseObject)
}
fetcher();
  },[params.productId])
  
  
  console.log(params.productId)
  return ( 
    
    <div>product Details:{product.data.title}</div>
  )
}

export default ProductDetail