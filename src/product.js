import React from 'react';


const Product =({id,title,price,img,amount,removeproduct })=>{
    return(
    
       <div className='main'>
         <img src = {img} className="img"></img>
        <div className='content'>
           
            {/* <h1>{id}</h1> */}
       
            <h1>{title}</h1>
            <h1>${price}</h1>
            <h3> Stocks Available : {amount}</h3>
            </div> 
            <button className='btn' onClick={()=>removeproduct(id)}>Remove Product</button>
         </div>
      
         
       
    )
}

export default Product;