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
    author: Author
    publisher: Publisher
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
        author(id: Int!): Author
        publishers: [Publisher]
        publisher(id: Int!): Publisher
    }

    type Mutation{
        createBook(title: String!): Boolean
        updateBook(id: Int! title: String publicationYear: Int): Book
        createAuthor(firstName: String! lastName:String!): Boolean
        createPublisher(name: String! foundationYear: Int): Boolean
    }

`;

module.exports = typeDefs;