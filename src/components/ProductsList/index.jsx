import Product from "./Product";
import { StyledSection } from "./styles";

function ProductList({products, handleClick}){
    return (
        <StyledSection>
            {products.map((prod) => {
                return <Product prod={prod} handleClick={handleClick} key={prod.id}></Product>
            })}
        </StyledSection>
    )
}

export default ProductList;