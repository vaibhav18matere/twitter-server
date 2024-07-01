import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
// import cors from "cors";
import express from "express";

export async function initialiseServer() {
     const app = express();
     
     app.use(bodyParser.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
    type Query {
     sayHello : String
    }
       `,
    resolvers: {
      Query: {
        sayHello: () => `Hello from graphQL Server!!`,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
