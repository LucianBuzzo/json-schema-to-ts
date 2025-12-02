const descriptionEvenNumberSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Even Number",
  "description": "This schema describes an even number",
  "type": "number",
  "multipleOf": 2
}

/**
 * @title Even Number
 * @description This schema describes an even number
 */
type DescriptionEvenNumberSchema = number

const descriptionEvenNumberValue1: DescriptionEvenNumberSchema = 4;

const descriptionIfElseNumberSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Number",
  "type": "number",
  "if": { "multipleOf": 2 },
  "then": { "description": "This is an even number" },
  "else": { "description": "This is an odd number" }
}

// Note: the description cannot be inferred in this case, as the value cannot be determined at compile time

/**
 * @title Number
 */
type DescriptionIfElseNumberSchema = number

const descriptionIfElseNumberValue1: DescriptionIfElseNumberSchema = 3;