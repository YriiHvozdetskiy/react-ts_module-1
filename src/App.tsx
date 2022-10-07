import React from 'react';
import {PageTitle} from './components/PageTitle/PageTitle';
import {Profile} from './components/Profile/Profile';
import {Container} from './components/Container/Container';
import user from './data.json'

export const App = () => {
   console.log('user',user)
   return (
      <div className="App">
         <PageTitle title={'Hello word'}/>
         <Container>
            <Profile user={user}/>
         </Container>
      </div>
   );
};

