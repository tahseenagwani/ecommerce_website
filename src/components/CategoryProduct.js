import React from 'react'
import { Link } from 'react-router-dom'


const CategoryProduct = ({ title, image, specs,features,price,stock,id}) => {
    return (
        <article key={id} id={id}>
            <div className='category-product-title'>
                <Link to={`products/${id}`}>{title}</Link>
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`./assets/${image}`} alt="title" className="src" />
                </div>
            </figure>
            <aside>
                <div className="category-product-info-dimentions">
                    <h1>Dimenstions</h1>
                    <label>{specs.dimentions}</label>
                </div>
                {specs.capacity &&
                    <div className="category-product-info-capacity">
                        <h1>Capacity</h1>
                        <label>{specs.capacity}</label>
                    </div>

                }
                <div className="category-product-info-features">
        <h3>Features</h3>
                <ul>
                {features?.map((f,index)=>{
                    return <li key={`feature-${index}`}>{f}</li>
                })}

                </ul>

                </div>
            </aside>
            <aside className="category-product-finance">
<div className="category-product-finance-price">
    &pound;{price}
</div>
<div className="category-product-info-stock">
    <label>
        Stock Level:{stock}
    </label>
    <label >FREE Delivery</label>
</div>

<div className='category-product-action'>

    <button>View Product</button>
    <button>Add a Basket</button>
</div>
            </aside>
        </article>
    )
}

export default CategoryProduct