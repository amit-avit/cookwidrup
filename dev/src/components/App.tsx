import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { VideoCardsContainer } from './video-cards-container';
import { Footer } from './footer';

const StyledDiv = styled.div`
  height: auto;
`;

export const App = () => (
  <StyledDiv id="application">
    <Header />
    <VideoCardsContainer />
    <Footer />
  </StyledDiv>
);
