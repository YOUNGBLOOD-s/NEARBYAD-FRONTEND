import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const BasicInformation = ({ country }) => {
  const { name, thumbnail, price, category } = country;
  return (
    <div>
      <StyledImg src={thumbnail} alt="" />
      <h1>
        {name}({category})
      </h1>
      <h2>{price}원</h2>
    </div>
  );
};

export default BasicInformation;
