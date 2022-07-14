import React from 'react'
import "./productList.css"
import "../portfolio/portfolio.css"
import Product from "../product/Product"
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl"  id="productList">
      <div className="pl-texts">
        <h1 className='pl-title'>If you don't believe in yourself, who will?</h1>
        <p className='pl-desc'>jhhhhjffffff</p>
      </div>
      <div className="pl-list item">
        {products.map((item)=>(
          <Product key={item.id} img={item.img} link={item.link}/>

        ))}
        
        
      </div>
    </div>
  )
}

export default ProductList