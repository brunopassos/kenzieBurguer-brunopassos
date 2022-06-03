import { useEffect, useState } from "react";
import ProductList from "./components/ProductsList"
import Cart from "./components/Cart";
import Header from "./components/Header";
import CartTotal from "./components/CartTotal";
import { GlobalStyle, StyledHeader, StyledDiv, StyledDiv2 } from "./components/style/global";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
  }, []);

  function showProducts(value){

    const arr = products.filter((product) =>{
      if(product.name.toLowerCase().includes(value.toLowerCase())){
        return product;
      }
    })

    setFilteredProducts([...arr]);
  }


  function handleClick(productId){

    const prodAdd = currentSale.some((prod) =>{
      return prod.id === productId
    })

    if(prodAdd === false){
      const prod = products.filter((product) => {
        return product.id === productId;
      })

      prod[0].qt = 1;
      
      setCurrentSale([...currentSale, ...prod])      
      setCartTotal(totalValue)
    }else {
      const newArr = currentSale.filter((product) => {
        if(product.id === productId){
          product.qt++;
          return product
        }else{
          return product
        }
      })
      setCurrentSale([...newArr]);
    }       
  }
  
  const totalValue = currentSale.reduce((acc, current) => {
    return (current.price * current.qt) + acc;
  },0)


  function removeAll(){
    setCurrentSale([]);
  }

  function removeProduct(productId){
    const newCurrentSale = currentSale.filter((product) => {
      return product.id !== productId;
    })

    setCurrentSale([...newCurrentSale]);
  }  

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <StyledHeader className="App-header">
        <Header showProducts={showProducts}/>
        <StyledDiv2>
          <ProductList products={filteredProducts.length === 0 ? products : filteredProducts} handleClick={handleClick}/>
          <StyledDiv>
            <Cart currentSale={currentSale} removeProduct={removeProduct}/>
            <CartTotal totalValue={Number(totalValue).toFixed(2)} removeAll={removeAll}/>
          </StyledDiv>
        </StyledDiv2>
      </StyledHeader>
    </div>
    </>
  );
}

export default App;