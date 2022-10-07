import styled from 'styled-components';
import React from 'react';

type TProp = {
   children?: React.ReactNode
};

export const MainContainer = styled.div<TProp>`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
