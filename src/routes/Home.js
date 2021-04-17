import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

//styled-components //

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #2b2e4a, #e84545);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 65%;
  position: relative;
  top: -50px;
`;

// query //
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (error) console.error(error);
  else {
    return (
      <Container>
        <Header>
          <Title>SOYEONG CINEMA</Title>
          <Subtitle>React & Apollo & GraphQL</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        <Movies>
          {data?.movies?.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              isLiked={movie.isLiked}
              bg={movie.medium_cover_image}
            />
          ))}
        </Movies>
      </Container>
    );
  }
};
