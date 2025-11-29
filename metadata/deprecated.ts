import { JsonObject } from "type-fest";

type Deprecated<T> = T & { __deprecated?: void };

const deprecatedCitySchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "properties": {
    "country": { "type": "string" },
    "city": { "type": "string", "deprecated": true }
  }
}

type DeprecatedCitySchema = {
    country?: string;
    /** @deprecated */
    city?: Deprecated<string>;
} & JsonObject

const deprecatedValue1: DeprecatedCitySchema = {
  country: "USA",
  city: "New York"
};

const deprecatedValue2: DeprecatedCitySchema["city"] = "New York";

const deprecatedCitySchemaWithDependent = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "properties": {
    "country": { "type": "string" },
    "city": { "type": "string" }
  },
  "dependentSchemas": {
    "country": {
      "properties": { "city": { "deprecated": true } }
    }
  }
}

type DeprecatedCitySchemaWithDependent = {
    country: string;
    /** @deprecated */
    city: Deprecated<string>;
} | {
    city: string;
} | {
    country: string;
}

const deprecatedWithDependentValue1: DeprecatedCitySchemaWithDependent = {
  country: "USA",
  city: "New York"
};

const city1 = deprecatedWithDependentValue1.city;

const deprecatedWithDependentValue2: DeprecatedCitySchemaWithDependent = {
  city: "New York"
};

const city2 = deprecatedWithDependentValue2.city;
