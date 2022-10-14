import React from 'react';
import {PageTitle} from './components/PageTitle/PageTitle';
import {Profile} from './components/Profile/Profile';
import {Container} from './components/Container/Container';
import {Statistics} from './components/Statistics/Statistics';
import {FriendList} from './components/FriendList/FriendList';
import {TransactionHistory} from './components/TransactionHistory/TransactionHistory';
import user from './data.json';
import stats from 'stats.json';
import friends from './friends.json';
import transactions from './transactions.json';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {Button} from './components/Button/Button';
import {AiFillAccountBook,AiFillCopyrightCircle} from 'react-icons/ai'

export const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Container>
               <Button>Search</Button>
               <Button type={'submit'}>Login</Button>
               <Button type={'reset'} icon={AiFillAccountBook}>Reset</Button>
               <Button type={'reset'} icon={AiFillCopyrightCircle}>Reset</Button>
               <Button type={'submit'} disabled>Login</Button>
            </Container>
            <Container>
               <TransactionHistory items={transactions}/>
            </Container>
            <Container>
               <FriendList friends={friends}/>
            </Container>
            <PageTitle title={'Hello word'}/>
            <Container>
               <Profile user={user}/>
            </Container>
            <Statistics title="Upload Stats" stats={stats}/>
         </div>
      </ThemeProvider>
   );
};

