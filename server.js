const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const MyGraphQLSchema = require("./Schema");

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

const PORT =  process.env.port|| 5000; 


app.listen(PORT, () => {
    console.log(`server is started in port ${PORT}`); 
}); 
