import React from 'react'
import styled from "styled-components";

import santa from '../images/santa.png';

const Santa = () => {
  return (
    <Image src={santa} alt="Clipart of santa waving" />
  )
}

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;

export default Santa; 