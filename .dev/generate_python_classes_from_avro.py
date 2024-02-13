from avrogen import write_schema_files
from pathlib import Path
import json

input_directory = "./avro"
output_directory = "./models/python"

files = Path(input_directory).glob('*schema.json')
for file in files:
    print(f'opening {file}...')
    schema_file = open(file)
    print('loading json...')
    schema_json = json.load(schema_file)
    print('generating class...')
    write_schema_files(json.dumps(schema_json), output_directory)
