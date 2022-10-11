import {FC,} from 'react';
import {Avatar, ItemList, List, Name, Status} from './FriendList.styled';

interface IProps {
   friends: {
      avatar?: string
      name: string
      isOnline: boolean
      id: number
   }[];
}

export const FriendList: FC<IProps> = ({friends}) => {

   return (
      <>
         <List>
            {friends.map (el => (
               <ItemList key={el.id}>
                  <Status status={el.isOnline}>{el.isOnline}</Status>
                  <Avatar src={el.avatar ? el.avatar : 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'}
                          alt="User avatar" width="48"/>
                  <Name>{el.name}</Name>
               </ItemList>
            ))}
         </List>
      </>
   );
};

