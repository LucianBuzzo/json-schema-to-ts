import { JsonObject, JsonPrimitive, JsonValue } from "type-fest";

const maxItems3Schema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "maxItems": 3
}

type MaxItems3Schema<T = JsonValue> =
    | []
    | [T]
    | [T, T]
    | [T, T, T]
    | JsonPrimitive
    | JsonObject;

// @ts-expect-error
const maxItems3Value1: MaxItems3Schema = [1, 2, 3, 4];

const maxItems3Value2: MaxItems3Schema = [1, true, "hello"];

const maxItems3Value3: MaxItems3Schema = [false, "foo"];

const maxItems3Value4: MaxItems3Schema = "Hello World";