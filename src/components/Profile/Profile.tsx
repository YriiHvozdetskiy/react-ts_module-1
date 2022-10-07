import {
   ProfileContainer,
   Link,
   ImageContainer,
   Tag,
   Name,
   Location,
   StatsInfo,
   InfoWrapper, Text, BoldText,
} from './Profile.styled';
import React, {FC} from 'react';
import {PageTitle} from '../PageTitle/PageTitle';

interface IProps {
   user:{
      username: string;
      tag: string;
      location: string;
      avatar: string;
      stats: {
         followers: number
         views: number
         likes: number
      };
   }
}

export const Profile:FC<IProps> = (props) => {
   const {username: name, tag, location, avatar, stats} = props.user;
   const URL = 'https://github.com/goitacademy/react-homework/tree/master/homework-01/social-profile'
   return (
      <>
         <ProfileContainer>
            <Link href={URL}>
               <ImageContainer src={avatar} alt="photo"/>
               <Name>{name}</Name>
               <Tag>{tag}</Tag>
               <Location>{location}</Location>
            </Link>
            <StatsInfo>
               <InfoWrapper>
                  <Text>Followers</Text>
                  <BoldText value={stats?.followers}>  {stats?.followers}</BoldText>
               </InfoWrapper>
               <InfoWrapper>
                  <Text>Views</Text>
                  <BoldText value={stats?.views}>{stats?.views}</BoldText>
               </InfoWrapper>
               <InfoWrapper>
                  <Text>Likes</Text>
                  <BoldText value={stats?.likes}>{stats?.likes}</BoldText>
               </InfoWrapper>
            </StatsInfo>
         </ProfileContainer>
         <PageTitle/>
      </>
   );
};

