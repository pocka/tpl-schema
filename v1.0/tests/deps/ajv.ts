// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import mod from "npm:ajv/dist/2020.js";

export * from "npm:ajv/dist/2020.js";

// @ts-expect-error: Ajv ships with broken ESM export
export const Ajv: typeof mod.default = mod;

export default Ajv;
