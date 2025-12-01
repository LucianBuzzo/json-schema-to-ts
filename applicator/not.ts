import { ExcludeStrict, JsonValue } from "type-fest";

// The "not" keyword cannot be fully expressed in TypeScript for scalar values, as it requires 
// either a function or new() constructor to correctly narrow/infer the type.
const notConstSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "not": {
        "title": "I will never be emitted as an annotation",
        "const": "Prohibited"
    }
}

type NotConstSchema<T extends string = string> = T extends "Prohibited" ? never : T;

const notConstValue1: NotConstSchema = "Hello World";
const notConstValue2: NotConstSchema = "Another String";
// This value should error, but doesn't due to limitations in TypeScript's type system
const notConstValue3: NotConstSchema = "Prohibited";
// @ts-expect-error - This value should error, becasue we manully set the generic
const notConstValueError: NotConstSchema<"Prohibited"> = "Prohibited";

// If the not schema only specifies a type, this can be expressed in TypeScript
const notTypeSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "not": {
        "type": "string"
    }
}

type NotStringSchema = ExcludeStrict<JsonValue, string>;
const notTypeValue1: NotStringSchema = 123;
const notTypeValue2: NotStringSchema = { key: "value" };
// @ts-expect-error
const notTypeValueError: NotStringSchema = "I am a string";


