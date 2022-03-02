import React from 'react';
import styled from 'styled-components';
import NavbarElements from './NavbarElements';

const Navbar = () => {
    return <NavbarStyled>
        <NavbarElements>

        </NavbarElements>
    </NavbarStyled>;
};


const NavbarStyled = styled.div`
 position: fixed;
 width: 100%;
 z-index: 1000;
`;

export default Navbar;
