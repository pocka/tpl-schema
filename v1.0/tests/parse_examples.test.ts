// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import { assertEquals } from "./deps/assert.ts";
import Ajv from "./deps/ajv.ts";

import schema from "../tpl.schema.json" with { type: "json" };

Deno.test("examples/npm-figspec.json", async () => {
	const ajv = new Ajv();

	const mod = await import("../examples/npm-figspec.json", {
		with: { type: "json" },
	});

	assertEquals(
		ajv.validate(schema, mod.default),
		true,
	);
});
