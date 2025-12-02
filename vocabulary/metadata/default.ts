import { JsonObject } from "type-fest";

const defaultValuesSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "default": {},
  "properties": {
    "language": { "default": "en" },
    "notifications": { "default": true }
  }
}

type DefaultValuesSchema = {
    /**
     * @default "en"
     */
    language?: string;
    /**
     * @default true
     */
    notifications?: boolean;
} & JsonObject

const defaultValuesValue1: DefaultValuesSchema = {};

const defaultValuesValue2: DefaultValuesSchema = {
  language: "en",
  notifications: true
}

const defaultValuesValue3: DefaultValuesSchema["language"] = "fr";