import { JsonObject, JsonPrimitive, JsonValue } from "type-fest";

const minItems3Schema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "minItems": 3
}

type MinItems3Schema<T = JsonValue> =
    | [T, T, T, ...T[]]
    | JsonPrimitive
    | JsonObject;

const minItems3Value1: MinItems3Schema = [1, 2, 3, 4];

const minItems3Value2: MinItems3Schema = [1, true, "hello"];

// @ts-expect-error
const minItems3Value3: MinItems3Schema = [false, "foo"];

const minItems3Value4: MinItems3Schema = "Hello World";