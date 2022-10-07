import {MainContainer, Title} from './Container.styled';
import React, {FC} from 'react';

interface IProp {
   children?: React.ReactChild | React.ReactNode
}

export const Container:FC<IProp> = ({children}) => {
   return (
      <>
         <MainContainer>
            {children}
         </MainContainer>
      </>
   );
};

