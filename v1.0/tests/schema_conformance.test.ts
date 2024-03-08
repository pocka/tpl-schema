// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import Ajv from "./deps/ajv.ts";

import schema from "../tpl.schema.json" with { type: "json" };

Deno.test("Schema should be valid JSON Schema", () => {
	const ajv = new Ajv();

	ajv.compile(schema);
});
