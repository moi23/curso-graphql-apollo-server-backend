import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      user: User
    }

    type User {
      id: ID
      nome: String
      sobrenome: String
      idade: Int
      decimais: Float
      humano: Boolean
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello Friend';
      },
      hi: () => 'Hello :)',
      user: () => {
        return {
          id: 'as56d41as5',
          nome: 'Moisés',
          sobrenome: 'Vilas Boas',
          idade: 23,
          decimais: 42.42,
          humano: true,
        };
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
