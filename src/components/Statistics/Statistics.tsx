import {ItemList, List, Section, Text, Title} from './Statistics.styled';
import {FC} from 'react';

interface IProps {
   title?: string;
   stats: {
      id: string
      label: string
      percentage: number
   }[];
}

const randomRgb = () => {
   const rgbNum = () => Math.floor (Math.random () * 256);
   const r = rgbNum ();
   const g = rgbNum ();
   const b = rgbNum ();
   return `rgb(${r},${g},${b})`;
};

export const Statistics: FC<IProps> = ({title, stats}) => {
   return (
      <>
         <Section>
            {title && <Title>{title}</Title>}
            <List>
               {stats.map (({id, label, percentage}) => (
                  <ItemList randomRgb={randomRgb} key={id}>
                     <Text>{label}</Text>
                     <Text isBigFont>{percentage} %</Text>
                  </ItemList>
               ))}
            </List>
         </Section>
      </>
   );
};

