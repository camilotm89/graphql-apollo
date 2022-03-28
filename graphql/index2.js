const {makeExecutableSchema} = require('graphql-tools')
const books = require('../data')

const typeDefs = `
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
    }

    type Mutation{
        createBook(title: String!): Boolean
    }
`;

const resolvers = {
    Query: {
        async books(_,args){
            return await books;
        },
        async book(_, {id}) {
            return await books.find((book) => book.id === id);
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
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,

});

module.exports = schema;