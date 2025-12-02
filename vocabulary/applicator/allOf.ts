const allOfSchema = {
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

type AllOfFooSchema = {
    foo: string;
};

type AllOfBarSchema = {
    bar: number;
};

type AllOfSchema = AllOfFooSchema & AllOfBarSchema;

const allOfValue1: AllOfSchema = {
    foo: "Hello",
    bar: 42
};

// @ts-expect-error
const allOfValueError1: AllOfSchema = {
    foo: "Hello"
};

// @ts-expect-error
const allOfValueError2: AllOfSchema = {
    bar: 42
};

const allOfValueError3: AllOfSchema = {
    // @ts-expect-error
    foo: 123,
    // @ts-expect-error
    bar: "Not a number"
};

// @ts-expect-error
const allOfValueError4: AllOfSchema = "Hello World"