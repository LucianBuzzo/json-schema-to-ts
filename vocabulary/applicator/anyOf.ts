const anyOfSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "allOf": [
        { "$ref": "#/$defs/foo" },
        { "$ref": "#/$defs/bar" }
    ],
    "$defs": {
        "foo": {
            "type": "object",
            "properties": {
                "foo": {
                    "type": "string"
                }
            },
            "required": ["foo"]
        },
        "bar": {
            "type": "object",
            "properties": {
                "bar": {
                    "type": "number"
                }
            },
            "required": ["bar"]
        }
    }
}

type AnyOfFooSchema = {
    foo: string;
};

type AnyOfBarSchema = {
    bar: number;
};

type AnyOfSchema = AnyOfFooSchema | AnyOfBarSchema;

const anyOfValue1: AnyOfSchema = {
    foo: "Hello"
};

const anyOfValue2: AnyOfSchema = {
    bar: 42
};

const anyOfValue3: AnyOfSchema = {
    foo: 123,
    // @ts-expect-error
    bar: "Not a number"
};

const anyOfValue4: AnyOfSchema = {
    // @ts-expect-error
    foo: 123,
};

// @ts-expect-error
const anyOfValue5: AnyOfSchema = "Hello World";

const anyOfValue6: AnyOfSchema = {
    foo: "Hello",
    bar: 42,
};