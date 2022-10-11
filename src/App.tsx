import React from 'react';
import {PageTitle} from './components/PageTitle/PageTitle';
import {Profile} from './components/Profile/Profile';
import {Container} from './components/Container/Container';
import {Statistics} from './components/Statistics/Statistics';
import user from './data.json'
import stats from 'stats.json'

export const App = () => {
   return (
      <div className="App">
         <PageTitle title={'Hello word'}/>
         <Container>
            <Profile user={user}/>
         </Container>
         <Statistics title='Upload Stats' stats={stats}/>
      </div>
   );
};

