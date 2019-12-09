import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

import Santa from "./Santa.js";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Santa/>
          <NavLinks style={linkAnimation}>
            <Link to="/">Home</Link>
            <Link to="/Days">Days</Link>
            <Link to="/Story">Story</Link>
          </NavLinks>
        </FlexContainer>
      </NavBar>
   </>
  )
}

export default Navbar;

const NavBar = styled(animated.nav)`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff ;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  height: 5rem;
  box-shadow: 0 5px 5px -5px #333;
`;

const NavLinks = styled(animated.ul)`
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #00B32C;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #B3000C;
      border-bottom: 1px solid #B3000C;
    }

    // @media (max-width: 768px) {
    //   display: none;
    // }
  }
`;
// const LinkWrapper = styled.div`
//   margin: auto 0;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;