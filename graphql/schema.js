const { buildSchema } = require('graphql');
/*
1. Import the buildSchema utility from the graphql library.

2. BuildSchema creates a GraphQLSchema object from the GraphQL schema language, which is structured like JSON. 
   You pass it in as one big string.

3. GraphQL, unlike JavaScript, is strongly typed meaning you have to explicitly specify the data types.
   Here we are defining Article as a type. And we are specifying it's fields, and what each field's data type is. 
   The GraphQL schema language supports the scalar types of String, Int, Float, Boolean, and ID. 
   Adding ! at the end means the field is required.

4. We'll use an input for our Create and Update mutations. Set required string fields for title and content.

5. List the queries we will accept and what will be returned. So here we accept a query called article with id as it's parameter that returns the Article type defined above. 
   We also accept a query called articles and return an array of the Article type defined above.
   Putting Article in brackets signifies that it will be an array of articles. "Article" and "articles" are the names of resolver functions that will make the actual queries to the the mongoDB database and return the results.
   We could define them in this file but we'll define them in a separate resolver file.

6. Mutations are HTTP requests to modify data. We'll define three, which will call resolver functions to create, delete, and update an Article.

7. Put the query and mutation objects inside a schema object.

8. Export the schema object for it to be used as the schema for our graphqlHTTP server.
*/
const schema = buildSchema(` 

type Article { 
  id: ID!
  title: String!
  content: String!
}
input ArticleInput { 
  title: String!
  content: String!
}
type Query { 
  article(id: ID!): Article
  articles: [Article]
}
type Mutation { 
  createArticle(articleInput: ArticleInput): Article
  deleteArticle(id: ID!): Article
  updateArticle(id: ID!, articleInput: ArticleInput): Article!
}
schema { 
  query: Query
  mutation: Mutation
}
`)

module.exports = schema; 