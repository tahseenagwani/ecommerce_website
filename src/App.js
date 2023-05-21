import './App.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/CategoryProduct';
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
      <Category key={d.id} id={d.id} title={d.title} onCategoryClick={() => handleCategoryClick(d.id)} />

    );

  }


  const renderProducts = () => {
   
    return products.data.map(d =>
      <CategoryProduct key={d.id} {...d} >{d.title}</CategoryProduct>
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
        <article >
          {products.errorMessage && <div>{products.errorMessage}</div>}
          <h1>Products</h1>

          {products && renderProducts()}
        </article>
      </section>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
