import React from 'react';
import {PageTitle} from './components/PageTitle/PageTitle';
import {Profile} from './components/Profile/Profile';
import {Container} from './components/Container/Container';
import {Statistics} from './components/Statistics/Statistics';
import {FriendList} from './components/FriendList/FriendList';
import user from './data.json'
import stats from 'stats.json'
import friends from './friends.json'

export const App = () => {
   return (
      <div className="App">
         <Container>
            <FriendList friends={friends}/>
         </Container>
         <PageTitle title={'Hello word'}/>
         <Container>
            <Profile user={user}/>
         </Container>
         <Statistics title='Upload Stats' stats={stats}/>
      </div>
   );
};

