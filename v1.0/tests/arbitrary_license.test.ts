// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import { assertEquals } from "./deps/assert.ts";
import Ajv from "./deps/ajv.ts";

import type { TPLLine } from "./types.ts";

import schema from "../tpl.schema.json" with { type: "json" };

Deno.test("Arbitrary license must have at least one text or file", () => {
	const ajv = new Ajv();

	const input: TPLLine = {
		files: [{ path: "foo.c" }],
		license: {
			type: "arbitrary",
			includes: [],
		},
	};

	assertEquals(
		ajv.validate(schema, input),
		false,
	);
});
