import { JsonValue } from "type-fest";

const oneOfRequiredSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "oneOf": [
        { "required": ["foo"] },
        { "required": ["bar"] },
        { "required": ["baz"] }
    ]
}

type OneOfRequiredFooSchema = {
    foo: JsonValue;
};

type OneOfRequiredBarSchema = {
    bar: JsonValue;
};

type OneOfRequiredBazSchema = {
    baz: JsonValue;
};

type OneOfRequiredSchema = XOR<OneOfRequiredFooSchema, XOR<OneOfRequiredBarSchema, OneOfRequiredBazSchema>>;

const oneOfRequiredValue1: OneOfRequiredSchema = {
    foo: 1
};

const oneOfRequiredValue2: OneOfRequiredSchema = {
    bar: 2
};

// @ts-expect-error
const oneOfRequiredValue3: OneOfRequiredSchema = {
    foo: 1,
    bar: 2
};

// @ts-expect-error
const oneOfRequiredValue4: OneOfRequiredSchema = {
    foo: 1,
    bar: 2,
    baz: 3
};

const oneOfRequiredValue5: OneOfRequiredSchema = {
    // @ts-expect-error
    extra: 4
};

const oneOfScalarMixedSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "oneOf": [
        { "required": ["foo"] },
        { type: "string" },
        { "required": ["baz"] }
    ]
}

type OneOfScalarMixedFooSchema = {
    foo: JsonValue;
};

type OneOfScalarMixedBazSchema = {
    baz: JsonValue;
};

type OneOfScalarMixedSchema = string | XOR<OneOfScalarMixedFooSchema, OneOfScalarMixedBazSchema>;

const oneOfScalarMixedValue1: OneOfScalarMixedSchema = {
    foo: 1
};

const oneOfScalarMixedValue2: OneOfScalarMixedSchema = "Hello World";

const oneOfScalarMixedValue3: OneOfScalarMixedSchema = {
    baz: true
};

const oneOfScalarMixedValue4: OneOfScalarMixedSchema = {
    foo: 1,
    // @ts-expect-error
    baz: true
};

// @ts-expect-error
const oneOfScalarMixedValue5: OneOfScalarMixedSchema = 42;