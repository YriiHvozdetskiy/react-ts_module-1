import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px #0000001f, 0px 1px 1px #00000024, 0px 2px 1px #0003;;
`;
export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  width: 100%;
`;
export const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Name = styled.h3`
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  margin-top: 30px;
`;
export const Tag = styled.p`
  color: gray;
  margin-top: 10px;
`;
export const Location = styled.p`
  color: gray;
  margin-top: 10px;
`;
export const StatsInfo = styled.div`
  display: flex;
  width: 100%;
  background: aliceblue;
`;

export const InfoWrapper = styled.div`
  padding: 15px 10px;
  flex-basis: 33.33%;
  text-align: center;

  :not(:last-child) {
    border-right: solid 1px rgba(105, 105, 105, 0.2);
  }
`;

export const Text = styled.p`
  color: gray;
`;

export const BoldText = styled.p`
  color: black;
  font-weight: 700;
`;
