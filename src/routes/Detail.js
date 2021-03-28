/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

// css //
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

/////////////

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      language
      rating
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  <Container>
    <Column>
      <Title>Name</Title>
      <Subtitle>English · 4.5</Subtitle>
      <Description>lorem ipsum lalalla </Description>
    </Column>
    <Poster></Poster>
  </Container>;
};
