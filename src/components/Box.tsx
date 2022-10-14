import styled from 'styled-components';
import {color, space, layout, flexbox} from 'styled-system';

type TProps = {
   bg?: string
   pt?:number
   width?:string
   height?:number
   display?:string
   alignItems?:string
   flexDirection?:string
}

export const Box = styled ('div')<TProps>(color,space,layout,flexbox)