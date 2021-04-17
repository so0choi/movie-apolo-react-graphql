/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

// css //

// const Background = styled.div`
//   height: 100vh;
//   background-image: linear-gradient(-45deg, #d754ab, #fd723a);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 65%;
  position: relative;
  margin-top: 100px;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
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
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
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
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(data);

  return (
    // <Background>
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>
          {data?.movie?.language} · {data?.movie?.rating}
        </Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
    /*{ <SubContainer>
        {data?.suggestions?.map((movie) => (
          <Movie
            bg={movie.medium_cover_image}
            key={movie.id}
            id={movie.id}
          ></Movie>
        ))}
      </SubContainer> }*/
    // </Background>
  );
};
