import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';

function App() {
  const [products,setProducts]=useState([]);
const  [categories,setCategories]=useState([])
  useEffect(()=>  
  {
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>{

      console.log(data);
      setCategories(data)
    })
  },[])

const handleCategoryClick=(id)=>{
  fetch("http://localhost:3001/products?catId=")
  .then(response=>response.json())
  .then(data=>{

    console.log(data);
    setProducts(data)
  })


}
  const rederCategories=()=>{
    return categories.map(d=> 
      <Category key={d.id} id={d.id} title={d.title} onCategoryClick={()=>handleCategoryClick(d.id)}/>

    );

  }
  return (
    <>
  <header>

    My store
  </header>

<section>   
   <nav>
   {categories && rederCategories()}
    </nav>
    <article>
      main area
    </article>
    </section>
<footer>
  footer
</footer>
    </>
  );
}

export default App;
