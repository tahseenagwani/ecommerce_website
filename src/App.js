import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';

function App() {
  const [results,setResults]=useState([]);

  useEffect(()=>  
  {
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>{

      console.log(data);
      setResults(data)
    })
  },[])


  const rederCategories=()=>{
    return results.map(d=> 
      <Category key={d.id} id={d.id} title={d.title}/>

    );

  }
  return (
    <>
  <header>

    My store
  </header>

<section>   
   <nav>
   {rederCategories()}
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
