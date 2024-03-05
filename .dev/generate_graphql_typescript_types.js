var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
import pkg from '@neo4j/graphql-ogm';
const { OGM, generate } = pkg;
import * as neo4j from "neo4j-driver";
import * as path from "path";
import * as fs from "fs";
const __dirname = path.resolve();
console.log(`operating in ${__dirname}`);
const neo4jUser = (_a = process.env.AURA_DB_USER) !== null && _a !== void 0 ? _a : '';
const neo4jPw = (_b = process.env.AURA_DB_PW) !== null && _b !== void 0 ? _b : '';
const neo4jUrl = (_c = process.env.AURA_DB_CONNECTION) !== null && _c !== void 0 ? _c : '';
const driver = neo4j.driver(neo4jUrl, neo4j.auth.basic(neo4jUser, neo4jPw));
const typeDefs = fs.readFileSync(path.join(__dirname, "./graphql", "schema.graphql"), "utf8");
// Generic is applied on the OGM
const ogm = new OGM({ typeDefs, driver });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Only generate types when you make a schema change
        if (process.env.GENERATE) {
            const outFile = path.join(__dirname, "ogm-types.ts");
            yield generate({
                ogm,
                outFile,
            });
            console.log("Types Generated");
            process.exit(1);
        }
    });
}
main();
