import styled from 'styled-components';


type TProp = {
   id: number | string
   size: number
}

export const Title = styled.h2<TProp>`
  color: red;
  font-size: 20px;
  background: #61dafb;
`;

// interface TitleProps {
//    readonly isActive: boolean;
// }
//
// const Title = styled.h1<TitleProps>`
//   color: ${(props) => (props.isActive ? props.theme.colors.main : props.theme.colors.secondary)};
// `;