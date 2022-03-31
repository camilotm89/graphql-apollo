const { ApolloServer, gql } = require('apollo-server');
const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book{
    id: Int!
    title: String!
    isbn: String
    synopsis: String
    genres: String
    publicationYear: Int
    }

    type Author{
        id: Int!
        firstName: String!
        lastName: String
        country: String
    }

    type Publisher{
        id: Int!
        name: String!
        foundationYear: Int
    }
    
    
    type Query{
        books: [Book]
        book(id: Int!): Book
        updateBook(id: Int! title: String publicationYear: Int): Book
        booksByTitle(title: String!):[Book]
        booksByYear(publicationYear: Int!):[Book]
        authors: [Author]
    }

    type Mutation{
        createBook(title: String!): Boolean
        updateBook(id: Int! title: String publicationYear: Int): Book
    }

`;

module.exports = typeDefs;