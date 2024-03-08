// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import { assertEquals } from "./deps/assert.ts";
import Ajv from "./deps/ajv.ts";

import type { TPLLine } from "./types.ts";

import schema from "../tpl.schema.json" with { type: "json" };

Deno.test("Should allow files with no license", () => {
	const ajv = new Ajv();

	const input: TPLLine = {
		files: [{ path: "foo.c" }],
	};

	assertEquals(
		ajv.validate(schema, input),
		true,
	);
});

Deno.test("Should not allow non-array item for `files` field", () => {
	const ajv = new Ajv();

	const input = {
		files: { path: "foo.c" },
	};

	assertEquals(
		ajv.validate(schema, input),
		false,
	);
});

Deno.test("Should not allow zero files", () => {
	const ajv = new Ajv();

	const input: TPLLine = {
		files: [],
	};

	assertEquals(
		ajv.validate(schema, input),
		false,
	);
});
