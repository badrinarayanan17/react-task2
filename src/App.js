
import React, {useState,useEffect} from 'react';
import Good from './loading';
import Products from './products';



//Fetching api data 

const url = "https://course-api.com/react-useReducer-cart-project";


function App(){
  const [loading,setLoading] = useState(true);
  const [products,setProducts] = useState([]);
 
  const removeproduct=(id)=>{
    const newproduct = products.filter((product)=>product.id!==id)
    setProducts(newproduct);
  }
  const fetchData = async()=>{
    setLoading(true);
 
  try{
    
    const response = await fetch(url);
    const products = await response.json();
     setProducts(products);
     setLoading(false);
    console.log(products);
  }
  
  catch(error){

    setLoading(false);
    console.log(error);
         
  }
}
  useEffect(()=>{
    fetchData();
    },[]);
 
if(products.length==0){
  return(
    <div className='refresh'>
      <h1 className='noproducts'>No Products left</h1>
      <button className='refreshbtn' onClick={fetchData}>Refresh</button>
    </div>
  )
}

  return(
    <main>
      <Products products={products} removeproduct={removeproduct}/>
    </main>
  )

}
export default App;