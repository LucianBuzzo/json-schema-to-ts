const dynamicRefGenericListDefaultSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/generic-list",
    "type": "array",
    "items": {
        "$dynamicRef": "#generic-list-item"
    },
    "$defs": {
        "default": {
            "$comment": "This is a default declaration to satisfy the bookending requirement",
            "$dynamicAnchor": "generic-list-item"
        }
    }
}

type GenericListItemDefault = unknown

type DynamicRefGenericListSchema = GenericListItemDefault[];

const dynamicRefGenericListValue1: DynamicRefGenericListSchema = [];
const dynamicRefGenericListValue2: DynamicRefGenericListSchema = [1, "foo", false];
// @ts-expect-error
const dynamicRefGenericListValue3: DynamicRefGenericListSchema = "Hello World"


const dynamicRefStringListSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/string-list",
    "$ref": "https://example.com/generic-list",
    "$defs": {
        "generic-list-item": {
            "$dynamicAnchor": "generic-list-item",
            "type": "string"
        }
    }
}

type GenericListItemString = string;

type DynamicRefStringListSchema = GenericListItemString[];

const dynamicRefStringListValue1: DynamicRefStringListSchema = [];
// @ts-expect-error
const dynamicRefStringListValue2: DynamicRefStringListSchema = [1, "foo", false];
const dynamicRefStringListValue3: DynamicRefStringListSchema = ["foo", "bar", "baz"];
// @ts-expect-error
const dynamicRefStringListValue4: DynamicRefStringListSchema = "Hello World"
