# Development document

This document describes commands and tips for writing and testing TPL schema.
Without specific instruction, commands described here assumes you are on project
root (repository root directory).

## Required tools

Use of tools that can read `.tool-versions` is recommended.

- Deno v1.x

## Test

In order to test the schema itself, run:

```
$ deno test
```

This command runs unit tests including schema meta validation and examples
validation.

## Source code

### Common rules

This project has EditorConfig config file. Use an editor or an editor plugin
that supports EditorConfig.

### Formatting code

In order to format JSON files, Markdown files, and test TypeScript files, run:

```
$ deno fmt
```

### Copyright and License display

This project aims to comply with [REUSE](https://reuse.software/). Each file
MUST have either copyright/license header or `<filename with ext>.license` file.

Do not forget to put a license text file under `LICENSES/` before using a new
license.
