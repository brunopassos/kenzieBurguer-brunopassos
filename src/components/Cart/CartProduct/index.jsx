import { StyledLi, StyledImg, StyledDivInfo, StyledDivRemove, StyledButton } from "./styles";

function CartProduct({product, removeProduct}){

    return (
        <StyledLi>
            <StyledImg src={product.img} alt="" />
            <StyledDivInfo>
                <h4>{product.name}</h4>
                <span>{product.category}</span>
            </StyledDivInfo>
            <StyledDivRemove>
                <StyledButton onClick={() => removeProduct(product.id)}>Remover</StyledButton>
                <p>{product.qt}</p>
            </StyledDivRemove>
        </StyledLi>
        
    )
}

export default CartProduct;