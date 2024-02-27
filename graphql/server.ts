import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import neo4j from "neo4j-driver";
import { Neo4jGraphQL } from "@neo4j/graphql";

import fs from "fs";
import path from "path";

import 'dotenv/config';

const __dirname = path.resolve();

const neo4jUser = process.env.AURA_DB_USER ?? '';
const neo4jPw = process.env.AURA_DB_PW ?? '';
const neo4jUrl = process.env.AURA_DB_CONNECTION ?? '';

const driver = neo4j.driver(
    neo4jUrl,
    neo4j.auth.basic(neo4jUser, neo4jPw)
);

const neoSchema = new Neo4jGraphQL({
    typeDefs: fs.readFileSync(
        path.join(__dirname, "./graphql", "schema.graphql"),
        "utf8"
    ),
    driver,
});

const schema = await neoSchema.getSchema();

await neoSchema.assertIndexesAndConstraints({ options: { create: true }});

const server = new ApolloServer({
    schema: schema,
});

const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ req }),
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
