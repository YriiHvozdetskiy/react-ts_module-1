import styled from 'styled-components';

export const List = styled.ul`
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  border: solid 1px grey;

  :hover {
    box-shadow: 0px 1px 3px #0000001f, 0px 1px 1px #00000024, 0px 2px 1px #0003;

  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 5px;
  }

`;

export const Name = styled.p`

`;

type TProps = {
   status: boolean
}
export const Status = styled.span<TProps>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.status ? 'green' : 'red'};

  &:not(:last-child) {
    margin-right: 5px;
  }
`;