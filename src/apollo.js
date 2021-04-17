import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pacific-coast-68450.herokuapp.com/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id, isLiked }, { cache }) => {
        const myMovie = {
          __typename: "Movie",
          id: id,
        };
        cache.modify({
          id: cache.identify(myMovie),
          fields: {
            isLiked(cachedName) {
              return !isLiked;
            },
          },
        });
      },
    },
  },
});

export default client;
