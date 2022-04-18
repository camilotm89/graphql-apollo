const { ApolloServer, gql } = require('apollo-server');
const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const database = require('../database.js');

database.connect;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,

});

module.exports = schema;