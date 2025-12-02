const typeNullSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "null"
}

type TypeNullSchema = null;

const typeNullValue: TypeNullSchema = null;
// @ts-expect-error
const typeNullValueError: TypeNullSchema = 42;

const typeBooleanSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "boolean"
}

type TypeBooleanSchema = boolean;

const typeBooleanValue: TypeBooleanSchema = true;
// @ts-expect-error
const typeBooleanValueError: TypeBooleanSchema = "not a boolean";

const typeObjectSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
}

type TypeObjectSchema = Record<string, unknown>;

const typeObjectValue: TypeObjectSchema = { key1: "value", key2: 42 };
// @ts-expect-error
const typeObjectValueError: TypeObjectSchema = "not an object";

const typeArraySchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
}

type TypeArraySchema = unknown[];

const typeArrayValue: TypeArraySchema = [1, "two", true];
// @ts-expect-error
const typeArrayValueError: TypeArraySchema = "not an array";

const typeNumberSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "number",
}

type TypeNumberSchema = number;

const typeNumberValue: TypeNumberSchema = 3.14;
// @ts-expect-error
const typeNumberValueError: TypeNumberSchema = "not a number";

const typeIntegerSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "integer",
}

// Note that in TypeScript, "number" type includes both integers and floats
// so we use "number" here as well.
type TypeIntegerSchema = number;

const typeIntegerValue: TypeIntegerSchema = 42;
// @ts-expect-error
const typeIntegerValueError: TypeIntegerSchema = "not an integer";

const typeStringSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "string",
}

type TypeStringSchema = string;

const typeStringValue: TypeStringSchema = "hello, world!";
// @ts-expect-error
const typeStringValueError: TypeStringSchema = 123;