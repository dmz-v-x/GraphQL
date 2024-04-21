import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// To create GraphQL Api we need to define it's schema

const typeDefs = `#graphql

    schema{
        query: Query
    }

    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

/**
 * const typeDefs = #graphql...: This line defines a constant variable named typeDefs. The backticks (`) indicate a template literal in JavaScript,
 *  which allows multi-line strings and interpolation. This string starts with #graphql, which suggests it's GraphQL schema syntax.
 *
 * type Query { greeting: String }: Inside the template literal, this line defines a GraphQL type called Query.
 * GraphQL types define the shape of data that clients can query. In this case, it defines a Query type with a single field called greeting, which is of type String.
 *
 * const resolvers = { ... }: This line defines another constant variable named resolvers. Resolvers are functions that define how to retrieve the data
 * for each field in the schema.
 *
 * Query: { greeting: () => "Hello World!" }: Inside the resolvers object, this line specifies a resolver function for the greeting field of the Query type.
 * It's an arrow function (() =>) that returns the string "Hello World!".
 */

const server = new ApolloServer({ typeDefs, resolvers });
const info = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${info.url}`);
