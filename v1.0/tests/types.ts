// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0
export interface FileRef {
	readonly path: string;
}

export interface CopyrightHolder {
	readonly name: string;
	readonly email?: string;
}

export interface Copyright {
	readonly text: string;
	readonly year?: string;
	readonly holders?: readonly CopyrightHolder[];
}

export interface ExpandedText {
	readonly text: string;
}

export type IncludeItem = ExpandedText | FileRef;

export interface ArbitraryLicense {
	readonly type: "arbitrary";
	readonly includes: readonly IncludeItem[];
}

export interface Spdx2_3LicenseRef {
	readonly licenseRef: string;
	readonly documentRef?: string;
	readonly includes: readonly IncludeItem[];
}

export interface Spdx2_3License {
	readonly id: string;
	readonly includesLaterVersions?: boolean;
	readonly includes: readonly IncludeItem[];
}

export type Spdx2_3SimpleExpression = Spdx2_3LicenseRef | Spdx2_3License;

export type Spdx2_3CompoundExpression =
	| Spdx2_3SimpleExpression
	| {
		readonly conjunction: "WITH";
		readonly license: Spdx2_3SimpleExpression;
		readonly exceptionId: string;
		readonly exceptionIncludes: readonly IncludeItem[];
	}
	| {
		readonly conjunction: "AND" | "OR";
		readonly left: Spdx2_3CompoundExpression;
		readonly right: Spdx2_3CompoundExpression;
	};

export interface SpdxLicense {
	readonly type: "spdx";
	readonly rawId: string;
	readonly expression: Spdx2_3CompoundExpression;
	readonly includes?: readonly IncludeItem[];
}

export interface TPLLine {
	readonly files: readonly FileRef[];
	readonly copyrights?: readonly Copyright[];
	readonly license?: ArbitraryLicense | SpdxLicense;
	readonly metadata?: Record<string, unknown>;
}
