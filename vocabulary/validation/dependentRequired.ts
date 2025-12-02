import { JsonType } from "../common";

type DependentRequired<
  B,
  K extends keyof B,
  D extends keyof B
> =
  // Branch 1: K is *not* allowed (so dependency doesn't apply)
  | (Omit<B, K> & { [P in K]?: never })

  // Branch 2: K is present → K and all dependencies are required
  | (B & { [P in K | D]-?: B[P] });

type ExcludedJsonType = Exclude<JsonType, Record<string, unknown>>;

const dependentRequiredSingleKeySchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "dependentRequired": {
    "foo": [ "bar", "baz" ]
  }
}

type DependentRequiredSingleKeySchema = DependentRequired<{
    foo: unknown;
    bar?: unknown;
    baz?: unknown;
} & Record<string, unknown>, "foo", "bar" | "baz"> | ExcludedJsonType

const dependentRequiredSingleKeyValue1: DependentRequiredSingleKeySchema = {
  foo: 1,
  bar: 2,
  baz: 3
};

const dependentRequiredSingleKeyValue2: DependentRequiredSingleKeySchema = {
  qux: 4
};

const dependentRequiredSingleKeyValue3: DependentRequiredSingleKeySchema = {};

const dependentRequiredSingleKeyValue4: DependentRequiredSingleKeySchema = "Hello World";

// @ts-expect-error
const dependentRequiredSingleKeyValueError1: DependentRequiredSingleKeySchema = {
  foo: 1,
  bar: 2
};

// @ts-expect-error
const dependentRequiredSingleKeyValueError2: DependentRequiredSingleKeySchema = {
  foo: 1,
};

const dependentRequiredMultiKeySchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "dependentRequired": {
    "foo": [ "bar" ],
    "bar": [ "baz" ]
  }
}

type DependentRequiredMultiKeySchema = DependentRequired<{
    foo: unknown;
    bar?: unknown;
    baz?: unknown;
} & Record<string, unknown>, "foo", "bar" | "baz"> | ExcludedJsonType

const dependentRequiredMultiKeyValue1: DependentRequiredMultiKeySchema = { "foo": 1, "bar": 2, "baz": 3 }
const dependentRequiredMultiKeyValue2: DependentRequiredMultiKeySchema = { "bar": 2, "baz": 3 }
const dependentRequiredMultiKeyValue3: DependentRequiredMultiKeySchema = {}
const dependentRequiredMultiKeyValue4: DependentRequiredMultiKeySchema = "Hello World"

// @ts-expect-error
const dependentRequiredMultiKeyValueError1: DependentRequiredMultiKeySchema = { "foo": 1, "bar": 2 }