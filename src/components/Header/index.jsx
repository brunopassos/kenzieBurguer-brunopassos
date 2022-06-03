import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { StyledHeader } from "./styles";

function Header({showProducts}){
    return (
        <StyledHeader>
            <Logo/>
            <InputSearch showProducts={showProducts}/>
        </StyledHeader>
    )
}

export default Header;