const books = [
    {
        id:0,
        title:"crimen y castigo",
        publicationYear:1866,
        author: 0
    },
    {
        id:1,
        title:"ensayo sobre la ceguera",
        publicationYear:1995,
        author: 1
    },
    {
        id:2,
        title:"la metamorfosis",
        publicationYear:1915,
        publisher: 0
    },
];

const authors = [
    {
        id: 0,
        firstName: "Fiodor",
        lastName: "Dostoyevski"
    },
    {
        id: 1,
        firstName: "Jose",
        lastName: "Saramago"
    },
];

const publishers = [
    {
        id:0,
        name: "Alianza Editorial",
        foundationYear:1966
    },
    {
        id:1,
        name: "Cam Editorial",
        foundationYear:1989
    }
]


module.exports = {books, authors, publishers};