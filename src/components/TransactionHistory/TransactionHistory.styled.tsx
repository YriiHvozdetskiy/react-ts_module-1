import styled from 'styled-components';

export const Table = styled.table`
  margin: 30px 0;
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background: #ecf1f4;
  }
`;

export const Header = styled.thead`
  background: ${props => props.theme.colors.assent};
`;

export const HeaderItem = styled.th`
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  padding: 10px;
  width: 300px;
`;

export const Body = styled.tbody``;

export const BodyItem = styled.td`
  color: #b6b7bb;
  text-align: center;
  padding: 10px;
`;
