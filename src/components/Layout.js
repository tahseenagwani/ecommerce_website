import React from 'react'
import '../App.css'
import { Link, Outlet } from 'react-router-dom';
const Layout = ({categories}) => {

    const rederCategories = () => {
        return categories.data.map(d =>
    
          <li key={d.id}><Link to={`categories/${d.id}`}>{d.title} </Link></li>
    
        );
    
      } 
    
  return (
    <>
    <header >
     <h1>My store</h1> 
    </header>

    <section>
      <nav>
        {categories.errorMessage && <div>{categories.errorMessage}</div>}
        {categories.data && rederCategories()}
      </nav>
      <main>

        <Outlet/>
      </main>
    </section>
    <footer>
    <Link to="/">Home Page</Link>
    | <Link to="basket">Home Page</Link>
    </footer>
  </>
  )
}

export default Layout