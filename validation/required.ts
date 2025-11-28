import { JsonArray, JsonObject, JsonPrimitive } from "type-fest";

const requiredOnlySchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "required": ["foo", "bar", "baz"]
}

type RequiredOnlySchema = {
    foo: unknown;
    bar: unknown;
    baz: unknown;
} & JsonObject | JsonPrimitive | JsonArray

const requiredOnlyValue1: RequiredOnlySchema = {
    foo: 1,
    bar: 2,
    baz: 3,
};

const requiredOnlyValue2: RequiredOnlySchema = {
    foo: 1,
    bar: 2,
    baz: 3,
    extra: true
};

// @ts-expect-error
const requiredOnlyValue3: RequiredOnlySchema = {
    foo: 1,
    bar: 2,
    extra: true
};

// @ts-expect-error
const requiredOnlyValue4: RequiredOnlySchema = {}

const requiredOnlyValue5: RequiredOnlySchema = "Hello World";

const requiredPropertiesSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "required": ["name", "age"],
    "properties": {
        "name": { "type": "string" },
        "age": { "type": "integer" }
    }
}

type RequiredPropertiesSchema = {
    name: string;
    age: number;
} & JsonObject | JsonPrimitive | JsonArray

const requiredPropertiesValue1: RequiredPropertiesSchema = {
    name: "John Doe",
    age: 30
};

const requiredPropertiesValue2: RequiredPropertiesSchema = {
    name: "John Doe",
    age: 30,
    extra: true
};

// @ts-expect-error
const requiredPropertiesValue3: RequiredPropertiesSchema = {
    name: "John Doe",
}

// @ts-expect-error
const requiredPropertiesValue4: RequiredPropertiesSchema = {
    name: 123,
    age: "foo"
};

// @ts-expect-error
const requiredPropertiesValue5: RequiredPropertiesSchema = {};

const requiredPropertiesValue6: RequiredPropertiesSchema = "Hello World";