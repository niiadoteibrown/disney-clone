import styled from "styled-components";

export const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    overflow: hidden;
    z-index: 3;
    color: ${(props) => props.theme.white};
`;