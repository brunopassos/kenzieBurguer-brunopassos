import { useState } from "react";
import { StyledForm, StyledImput, StyledButton } from "./styles"

function InputSearch({showProducts}){
    const [value, setValue] = useState("");

    return (
        <StyledForm onSubmit={(event) => event.preventDefault(showProducts(value))}>
            <StyledImput  type="text" placeholder="Digitar Pesquisa" onChange={(event) => setValue(event.target.value)}/>
            <StyledButton type="submit">Pesquisar</StyledButton >
        </StyledForm>
    )
}

export default InputSearch;

//onSubmit={(event) => { event.preventDefault(showProducts(event.target.value))}}