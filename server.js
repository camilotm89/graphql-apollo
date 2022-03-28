/*const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/index');


const server = new ApolloServer({
    schema
});


const app = express();
server.applyMiddleware({ app });

 
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000/graphql');
});*/

const { ApolloServer, gql } = require('apollo-server');
const schema = require('./graphql/index');


const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});