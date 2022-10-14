// @ts-ignore
import styles from './PageTitle.module.scss';
import {Title} from './Title.styled';
import {Text} from './Text.styled';
import {Box} from '../Box';

interface IPageTitle {
   title?: string;
}

export const PageTitle = ({title}: IPageTitle) => {
   return (
      <>
         <Box as={'header'}
              display={'flex'}
              alignItems={'center'}>
            <h1 className={styles.title}>{title}</h1>
         </Box>
         <Title id={'4'} size={40}>styled-components</Title>
         <Text id={'34'}>emotion</Text>
      </>
   );
};