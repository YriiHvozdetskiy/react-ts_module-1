// @ts-ignore
import styles from './PageTitle.module.scss';
import {Title} from './Title.styled';
import  {Text} from './Text.styled';

interface IPageTitle {
   title?: string;
}

export const PageTitle = ({title}: IPageTitle) => {
   return (
      <>
         <h1 className={styles.title}>{title}</h1>

         <Title id={'4'} size={40}>styled-components</Title>
         <Text id={'34'}>emotion</Text>
      </>
   );
};