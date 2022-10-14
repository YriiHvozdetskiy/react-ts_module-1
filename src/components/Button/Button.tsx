import React, {FC} from 'react';
import {StyledButton} from './Button.styled';

interface IProps {
   children: string;
   type?: "button" | "submit" | "reset";
   disabled?: boolean;
   icon?: any;
}

export const Button: FC<IProps> = ({type = 'button', icon: Icon = null, disabled = false, children}) => {
   return (
      <>
         <StyledButton type={type} disabled={disabled}>
            {Icon && <Icon/>}
            {children}
         </StyledButton>
      </>
   );
};