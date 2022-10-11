import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

type TProps = {
   randomRgb: () => string
}

export const ItemList = styled.li<TProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background: ${props => {
   console.log('props',props)
    return  props.randomRgb
  }};
`;

type TText = {
   isBigFont?: boolean
}

export const Text = styled.span<TText>`
  color: white;
  font-size: ${props => props.isBigFont ? 30 : 16}px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
