import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
`

export const NavLeftContainer = styled.div`
    display: flex;
    flex: 25%;
    justify-content: flex-start;
    padding-left: 5%;
    background-color: ${props => props.theme.colors.offBlack};
    color: white;
    align-items: center;
`

export const NavMiddleContainer = styled.div`
    display: flex;
    flex: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.offBlack};
`

export const NavRightContainer = styled.div`
    display: flex;
    flex: 25%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5%;
    color: white;
    background-color: ${props => props.theme.colors.offBlack};
`

export const NavInnerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
`

export const NavLink = styled(Link)`
    color: papayawhip;
    font-size: x-large;
    text-decoration: none;
    margin: 50px;
`

export const NameLogo = styled(Link)`
    color: papayawhip;
    font-family: "consolas";
    font-size: xx-large;
    text-decoration: none;
    margin: 50px;
`

export const SocialsContainer = styled.div`
    color: ${props => props.theme.colors.offBlack};
    padding: 10px;
`

export const SocialsLink = styled(Link)`
    margin: 10px;
    text-decoration: none;
`
