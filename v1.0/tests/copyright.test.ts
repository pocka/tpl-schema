// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import { assertEquals } from "./deps/assert.ts";
import Ajv from "./deps/ajv.ts";

import type { TPLLine } from "./types.ts";

import schema from "../tpl.schema.json" with { type: "json" };

Deno.test("Should allow files with single copyright", () => {
	const ajv = new Ajv();

	const input: TPLLine = {
		files: [{ path: "foo.c" }],
		copyrights: [{
			text: "Copyright 2020, 2022-2024 Alice, Bob <bob@example.com>",
			year: "2020, 2022-2024",
			holders: [
				{ name: "Alice" },
				{ name: "Bob", email: "bob@example.com" },
			],
		}],
	};

	assertEquals(
		ajv.validate(schema, input),
		true,
	);
});
