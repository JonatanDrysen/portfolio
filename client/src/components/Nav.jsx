import React from 'react'

import { ReactComponent as Github } from "../utils/svgs/Github.svg"
import { ReactComponent as LinkedIn } from "../utils/svgs/LinkedIn.svg"

import {
  NavbarContainer,
  NavInnerContainer,
  NavLeftContainer,
  NavMiddleContainer,
  NavRightContainer,
  NavLink,
  NameLogo,
  SocialsContainer,
  SocialsLink
} from './styled/Nav.styled'
import { Link } from 'react-router-dom'

export default function Nav() {
  const logo = "</Jonatan-Drysén>"

  return (
    <NavbarContainer>
      <NavInnerContainer>

        <NavLeftContainer>
          <NameLogo to="/">{ logo }</NameLogo>
        </NavLeftContainer>

        <NavMiddleContainer>
          <NavLink to="#">Home</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Services</NavLink>
          <NavLink to="#">Contact</NavLink>
        </NavMiddleContainer>

        <NavRightContainer>
          <SocialsContainer>
            <SocialsLink to="#"> <Github /> </SocialsLink>
            <SocialsLink to="#"> <LinkedIn /> </SocialsLink>
          </SocialsContainer>
        </NavRightContainer>

      </NavInnerContainer>
    </NavbarContainer>
  )
}
