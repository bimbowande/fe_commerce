import styled from "styled-components";

export const NavContainer = styled.header`
position:absolute;
width:100%;
display:flex;
top:40px;
justify-content:center;
align-items:center;
transition-property: top;
transition-timing-function:ease-in;
`

export const LogoContainer = styled.div`
height:60px;
flex:1;

`
export const NavContent = styled.div`
width:80%;
display:flex;
position:fixed;
justify-content:space-between;
align-items:center;
`

export const LogoImg  = styled.img`
    width:20%;
    max-height:100%;
`

export const MenuContainer = styled.nav`
    display:flex;
    gap:70px;
    flex:1;
    justify-content:center;
    padding-left:250px;
`

export const MenuItems = styled.li`
list-style-type:none;
font-weight:500;
color:#fff;
`