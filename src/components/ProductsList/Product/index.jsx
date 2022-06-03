import { createGlobalStyle } from "styled-components";
import { StyledArticle, StyledImg, StyledDiv, StyledH1, StyledSpan, StyledP } from "./styles";
import { Button } from "../../style/global";

function Product({prod, handleClick}){
    return (
        <StyledArticle >
            <StyledImg src={prod.img} alt=""/>
            <StyledDiv>
                <StyledH1>{prod.name}</StyledH1>
                <StyledSpan>{prod.category}</StyledSpan>
                <StyledP>{`R$ ${(prod.price).toFixed(2)}`}</StyledP>
                <Button buttonBackground={"#27AE60"} buttonWidth={106} onClick={() => handleClick(prod.id)}>Adicionar</Button>
            </StyledDiv>
        </StyledArticle>
    )
}

export default Product;