import pkg from '@neo4j/graphql-ogm';
const { OGM, generate } = pkg;
import { ModelMap } from "./ogm-types"; // this file will be auto-generated using 'generate'
import * as neo4j from "neo4j-driver"
import * as path from "path"
import * as fs from "fs";

const __dirname = path.resolve();
console.log(`operating in ${__dirname}`);

const neo4jUser = process.env.AURA_DB_USER ?? '';
const neo4jPw = process.env.AURA_DB_PW ?? '';
const neo4jUrl = process.env.AURA_DB_CONNECTION ?? '';

const driver = neo4j.driver(
    neo4jUrl,
    neo4j.auth.basic(neo4jUser, neo4jPw)
);

const typeDefs = fs.readFileSync(
    path.join(__dirname, "./graphql", "schema.graphql"),
    "utf8"
);

// Generic is applied on the OGM
const ogm = new OGM<ModelMap>({ typeDefs, driver });

async function main() {
    // Only generate types when you make a schema change
    if (process.env.GENERATE) {
        const outFile = path.join(__dirname, "ogm-types.ts");
        console.log(`generating to ${outFile}...`)

        try {
            await generate({
                ogm,
                outFile,
            });
        } catch (e) {
            console.log(e);
        }

        console.log("Types Generated");

        process.exit(0);
    }
}
main()
