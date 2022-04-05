const {books, authors, publishers} = require('../data');


const resolvers = {
    Query: {
        //BOOKS
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
        },
        
        //AUTHORS
        async authors(_,args){
            return await authors;
        },
        async author(_, {id}) {
            return await authors.find((author) => author.id === id);
        },
        //PUBLISHERS
        async publishers(_,args){
            return await publishers;
        },
        async publisher(_, {id}) {
            return await publishers.find((publisher) => publisher.id === id);
        },

        
    },
    Book: {
        author: ({author}) => {
            return authors.find(a => {
                return a.id === author
            })
        },
        publisher: ({publisher}) => {
            return publishers.find(a => {
                return a.id === publisher
            })
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
        },
        async createAuthor(_, {firstName, lastName}){
            let newAuthor = {
                id : authors.length,
                firstName,
                lastName,
            };

            return await authors.push(newAuthor);
        },
        
    }
};

module.exports = resolvers;