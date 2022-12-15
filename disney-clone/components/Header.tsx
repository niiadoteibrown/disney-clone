import React from "react";
import { Logo, Nav, Login, LoginContainer } from "./styles";

const Header = () => {

    const renderHeader = () => {
        return (
            <LoginContainer>
                <Login>
                    Login
                </Login>
            </LoginContainer>
        );
    };

    return (
        <Nav>
            <Logo src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disney logo" />

            {renderHeader()}
        </Nav>
    );
};

export default Header;