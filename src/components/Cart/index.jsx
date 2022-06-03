import CartProduct from "./../Cart/CartProduct"
import { StyledAside, StyledH3, StyledUl, StyledDiv, StyledH3Secondary, StyledP } from "./styles";

function Cart({currentSale, removeProduct}){
    return (

        <StyledAside>
            <StyledH3>Carrinho de compras</StyledH3>
            <StyledUl>
                {currentSale.length === 0 ? 
                <StyledDiv>
                    <StyledH3Secondary>Sua sacola está vazia</StyledH3Secondary>
                    <StyledP>Adicione itens.</StyledP>
                </StyledDiv> : 
                currentSale.map((product) => {
                    return <CartProduct key={product.id} product={product} removeProduct={removeProduct}/>
                })}                
            </StyledUl>
        </StyledAside>
    )
}

export default Cart;