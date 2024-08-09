"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: 1,
        name: 'Djenole',
        email: 'djenole@gmail.com'
    }
];
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
