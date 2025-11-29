const titleEvenNumberSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Even Number",
  "type": "number",
  "multipleOf": 2
}

/**
 * @title Even Number
 */
type TitleEvenNumberSchema = number

const titleEvenNumberValue1: TitleEvenNumberSchema = 4;