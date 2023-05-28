import './App.css';
import { useEffect, useState } from 'react';
// import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/CategoryProduct';
import { Link } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState({ errorMessage: '', data: [] });
  const [categories, setCategories] = useState({ errorMessage: '', data: [] })
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories()

      setCategories(responseObject)
    }
    fetchData();
  }, [])

  const handleCategoryClick = (id) => {

    const fetchData = async () => {
      const responseObject = await getProducts(id)

      setProducts(responseObject)
    }
    fetchData()

  }
  const rederCategories = () => {
    return categories.data.map(d =>

      <li key={d.id}><Link to={`categories/${d.id}`}>{d.title} </Link></li>

    );

  }


  
  return (
    <>
      <header>

        My store
      </header>

      <section>
        <nav>
          {categories.errorMessage && <div>{categories.errorMessage}</div>}
          {categories.data && rederCategories()}
        </nav>
      </section>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
