
import React from "react";
import Product from "./product";


const Products =({products,removeproduct})=>{
    return(
        <article>
        <div>

            <h1 className="title">OUR PRODUCTS</h1>
          
      
        </div>
        <section>
        <div>
        {products.map((product)=>{
        return <Product key={product.id} {...product} removeproduct={removeproduct}/>;
      })}
        </div>
        </section>
        </article>
    )
}

export default Products;