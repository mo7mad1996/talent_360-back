import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";

import { userResolver } from "./resolvers/userResolver";
import { schema } from "./schema";

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: userResolver,
    graphiql: true,
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
