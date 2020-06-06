import React from 'react';
import styled from 'styled-components';
import { LasagnaRecipeVideo } from './lasagna';

const StyledDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const App = () => (
  <StyledDiv id="application">
    <div>Hello, world!!!!</div>
    <LasagnaRecipeVideo />
  </StyledDiv>
);
