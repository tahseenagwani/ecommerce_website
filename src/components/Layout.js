import React from 'react'
import '../App.css'
import { Link, Outlet } from 'react-router-dom';
import { CartIcon, HomeIcon } from './icons';

const Layout = ({categories}) => {

    const rederCategories = () => {
        return categories.data.map((d) =>(
    
          <li key={d.id}>
            <Link to={`categories/${d.id}`}>{d.title} </Link>
          
          </li>
    
        ));
    
      } ;
    
  return (
    <>
    <header >
     <div className="headerHomeIcon">
      <Link to="/"><HomeIcon width={40}></HomeIcon> </Link>     
     </div>
     <div className="headerTitle">
      Our Store
     </div>
     <div className="headerCartIcon">
      <Link to="/basket"><CartIcon width={40}></CartIcon></Link>
     </div>
    </header>

    <section>
      <nav>
        {categories.errorMessage && (<div>ERROR:{categories.errorMessage}</div>)}
       
       <ul> {categories.data && rederCategories()}</ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </section>
    <footer>
    <Link to="/">Home Page</Link>
    | <Link to="basket">Basket</Link>
    </footer>
  </>
  );
};

export default Layout