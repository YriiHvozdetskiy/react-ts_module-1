import {FC} from 'react';
import {Header, HeaderItem, TableRow, Table, Body, BodyItem} from './TransactionHistory.styled';

interface IProps {
   items: {
      id: string
      type: string
      amount: string
      currency: string
   }[];
}

export const TransactionHistory: FC<IProps> = ({items}) => {
   return (
      <>
         <Table>
            <Header>
               <TableRow>
                  <HeaderItem>Type</HeaderItem>
                  <HeaderItem>Amount</HeaderItem>
                  <HeaderItem>Currency</HeaderItem>
               </TableRow>
            </Header>
            <Body>
               {items.map (el => (
                  <TableRow key={el.id}>
                     <BodyItem>{el.type}</BodyItem>
                     <BodyItem>{el.amount}</BodyItem>
                     <BodyItem>{el.currency}</BodyItem>
                  </TableRow>
               ))}
            </Body>
         </Table>
      </>
   );
};

