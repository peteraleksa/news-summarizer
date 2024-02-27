import { avroToTypeScript, RecordType } from "avro-typescript"
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";

function* readAllFiles(dir: string): Generator<any> {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        if (file.isDirectory()) {
            yield* readAllFiles(path.join(dir, file.name));
        } else {
            yield {
                filePath: path.join(dir, file.name),
                directory: dir,
            };
        }
    }
}

function camelCase(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

for (const {filePath, directory} of readAllFiles('./avro')) {
    const schemaText = fs.readFileSync(filePath, "UTF8");
    const schema = JSON.parse(schemaText) as RecordType;
    const ts = avroToTypeScript(schema);
    const modelDirectory = `./models/ts/${directory.replace('avro/', '')}`;
    if (!fs.existsSync(modelDirectory))
        fs.mkdirSync(modelDirectory, { recursive: true }, (err) => {
            if (err) throw err;
        });
    fs.writeFileSync(`${modelDirectory}/${schema.name}.ts`, ts);
}
