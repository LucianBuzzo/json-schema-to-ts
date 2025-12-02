const constNumberSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": 5
}

type ConstNumberSchema = 5;

const constNumberValue: ConstNumberSchema = 5;
// @ts-expect-error
const constNumberValueError1: ConstNumberSchema = 1234;
// @ts-expect-error
const constNumberValueError2: ConstNumberSchema = "Hello";

const constObjectSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "const": { "name": "John Doe", "age": 30 }
}

type ConstObjectSchema = { name: "John Doe"; age: 30; };

const constObjectValue: ConstObjectSchema = { "name": "John Doe", age: 30 };
// @ts-expect-error
const constObjectValueError1: ConstObjectSchema = { "name": "Jane Doe", "age": 30 }
// @ts-expect-error
const constObjectValueError2: ConstObjectSchema = 30