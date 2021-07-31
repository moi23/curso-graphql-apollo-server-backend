import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    # Query é o type Padrão inicializador
    type Query {
      hello: String
      hi: String
      user: User
      users: [User!]!
    }

    #User e um Custom Type || Object Type
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
      users: () => {
        return [
          {
            id: '23F2332DSfd',
            nome: 'Moisés',
            sobrenome: 'Vilas Boas',
            idade: 23,
            decimais: 42.42,
            humano: true,
          },
          {
            id: 'f23t32gsd',
            nome: 'Anabelle',
            sobrenome: 'Segatto',
            idade: 23,
            decimais: 42.42,
            humano: true,
          },
          {
            id: '12d12d2112d12',
            nome: 'Stifler',
            sobrenome: 'dos Santos',
            idade: 12,
            decimais: 42.42,
            humano: true,
          },
          {
            id: 'f23324',
            nome: 'Moisés',
            sobrenome: 'Vilas Boas',
            idade: 23,
            decimais: 42.42,
            humano: true,
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
