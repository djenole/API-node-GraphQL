import {makeExecutableSchema} from 'graphql-tools';

const users: any[] = [
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
]

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
            const newUser = Object.assign({id: users.length+1}, args);
            users.push(newUser);
            return newUser;
        }
    }
};

export default makeExecutableSchema({typeDefs, resolvers});