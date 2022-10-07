import styled from '@emotion/styled'

type TProp = {
   id:number | string;
}


export const Text = styled('p')<TProp>`
  color: #61dafb;
  font-size: ${props => props.id}px;
`;