const {books, authors} = require('../data');


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
        //PUBLISHERS
        async publishers(_,args){
            return await publishers;
        },

        
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

module.exports = resolvers;