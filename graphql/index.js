const { ApolloServer, gql } = require('apollo-server');
const {makeExecutableSchema} = require('graphql-tools');
const books = require('../data');


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
    
    
    type Query{
        books: [Book]
        book(id: Int!): Book
        updateBook(id: Int! title: String publicationYear: Int): Book
        booksByTitle(title: String!):[Book]
        booksByYear(publicationYear: Int!):[Book]
    }

    type Mutation{
        createBook(title: String!): Boolean
        updateBook(id: Int! title: String publicationYear: Int): Book
    }

`;

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        async books(_,args){
            return await books;
        },
        async book(_, {id}) {
            return await books.find((book) => book.id === id);
        },
        async booksByTitle(_,{title}){
            return await books.filter((book) => book.title.includes(title));
        },
        async booksByYear(_,{publicationYear}){
            return await books.filter(book => book.publicationYear === publicationYear);
        }

        
    },

    Mutation: {
        async createBook(_, {title, publicationYear}){
            let newBook = {
                id : books.length,
                title,
                publicationYear,
            };

            return await books.push(newBook);
        },
        updateBook: (root, args) => {
            const book = books.find(book => book.id === args.id)
            if(!book) return null;
            const newData = {... book, title: args.title, publicationYear: args.publicationYear}
            books[args.id] = newData;
        }
        
    }
};


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,

});

module.exports = schema;