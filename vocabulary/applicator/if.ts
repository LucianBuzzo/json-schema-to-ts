import { JsonArray, JsonPrimitive, JsonValue } from "type-fest";

const ifThenElseSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "if": {
        "type": "object",
        "properties": {
            "type": { "const": "error" }
        },
    },
    "then": {
        "type": "object",
        "properties": {
            "message": { "type": "string" }
        },
        "required": ["message"]
    },
    "else": {
        "type": "object",
        "properties": {
            "data": { "type": "number" }
        },
        "required": ["data"]
    }
};

type IfThenSubSchema = {
    type: "error";
    message: string;
};

type IfElseSubSchema = {
    type?: string;
    data: number;
};

type IfThenElseErrorSchema = IfThenSubSchema | IfElseSubSchema;

const ifThenElseValue1: IfThenElseErrorSchema = {
    type: "error",
    message: "An error occurred"
};

const ifThenElseValue2: IfThenElseErrorSchema = {
    data: 42
};

const ifThenElseValue3: IfThenElseErrorSchema = {
    type: "info",
    data: 100
};

// @ts-expect-error
const ifThenElseValueError1: IfThenElseErrorSchema = {
    type: "error"
};

const ifThenElseValue4: IfThenElseErrorSchema = {
    message: "An error occurred",
    data: 42
};

const ifThenElseValueError2: IfThenElseErrorSchema = {
    // @ts-expect-error
    data: "Not a number"
};

const ifThenElseValueError3: IfThenElseErrorSchema = {
    type: "error",
    // @ts-expect-error
    message: 1234
};

const ifThenOnlySchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "if": {
        "type": "object",
        "properties": {
            "type": { "const": "error" }
        },
    },
    "then": {
        "type": "object",
        "properties": {
            "message": { "type": "string" }
        },
        "required": ["message"]
    },
};

type IfThenOnlySubSchema = {
    type: "error";
    message: string;
};

type IfThenOnlySchema = IfThenOnlySubSchema | JsonArray | JsonPrimitive;

const ifThenOnlyValue1: IfThenOnlySchema = {
    type: "error",
    message: "An error occurred"
};

// Valid since it doesn't match the "if" condition
// However this is very hard/impossible to catch with TypeScript, as we don't have a way to say "any string but 'error'"
const ifThenOnlyValue3: IfThenOnlySchema = {
    type: "info",
    data: 100
};

// @ts-expect-error
const ifThenOnlyValueError1: IfThenOnlySchema = {
    type: "error"
};

// @ts-expect-error
const ifThenOnlyValueError2: IfThenOnlySchema = {
    message: 1234
};