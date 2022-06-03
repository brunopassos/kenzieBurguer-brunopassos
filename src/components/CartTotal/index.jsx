import { StyledTotalDiv, StyledButton, StyledDiv, StyledP, StyledP2 } from "./styles";

function CartTotal({totalValue, removeAll}){
    return (
        <StyledTotalDiv>
            <StyledDiv>
                <StyledP>Total</StyledP>
                <StyledP2>{`R$ ${totalValue}`}</StyledP2>
            </StyledDiv>
            <StyledButton buttonBackground={"#E0E0E0"} buttonWidth={343} onClick={() => {removeAll()}}>Remover Todos</StyledButton>
        </StyledTotalDiv>
    )
}

export default CartTotal;