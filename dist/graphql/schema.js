"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Djenole',
        email: 'djenole@gmail.com'
    },
    {
        id: 2,
        name: 'oxi',
        email: 'outro@gmail.com'
    },
    {
        id: 3,
        name: 'aham',
        email: 'tabom@gmail.com'
    }
];
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }
        
    type Query {
        allUser: [User!]!
    }

    type Mutation {
        createUser(
            name: String!, 
            email: String!
        ): User
    }
`;
const resolvers = {
    Query: {
        allUser: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
