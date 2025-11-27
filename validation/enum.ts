const enumStringsSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [ "red", "green", "blue" ]
}

type EnumStringsSchema = "red" | "green" | "blue";

const enumStringsValue: EnumStringsSchema = "green";
// @ts-expect-error
const enumStringsValueError: EnumStringsSchema = "black";
// @ts-expect-error
const enumStringsValueError: EnumStringsSchema = 2;

const enumNumbersSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [ 1, 2.0, 3 ]
}

type EnumNumbersSchema = 1 | 2 | 3;

const enumNumbersValue1: EnumNumbersSchema = 1;
const enumNumbersValue2: EnumNumbersSchema = 2;
// @ts-expect-error
const enumNumbersValueError: EnumNumbersSchema = 5;
// @ts-expect-error
const enumNumbersValueError: EnumNumbersSchema = "Hello";

const enumHeterogeneousSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "enum": [ "red", 123, true, { "foo": "bar" }, [ 1, 2 ], null ]
}

type EnumHeterogeneousSchema = "red" | 123 | true | { foo: "bar" } | [1, 2] | null;

const enumHeterogeneousValue1: EnumHeterogeneousSchema = true;
const enumHeterogeneousValue2: EnumHeterogeneousSchema = { foo: "bar" };
// @ts-expect-error
const enumHeterogeneousValueError: EnumHeterogeneousSchema = { foo: "baz" };