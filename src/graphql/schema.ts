import {makeExecutableSchema} from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Djenole',
        email: 'djenole@gmail.com'
    }
]

const typeDefs = `
    type User {
        id: ID!}
        name: String!
        email: String!
    }

    type Query {
        allUser: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUser: () => users
    }
};

export default makeExecutableSchema({typeDefs, resolvers});