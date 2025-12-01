// To my understanding, unevaluatedProperties is not possible to express in 
// TypeScript, unless the additional properties have the same type as the 
// defined properties.

// This Schema cannot be expressed in TypeScript, as the unevaluatedProperties
// allows properties of a different type than the defined properties.
const unevaluatedPropertiesNumberSchema = {
    "type": "object",
    "properties": {
        "name": { "type": "string" }
    },
    "unevaluatedProperties": { "type": "number" }
}

type UnevaluatedPropertiesNumberSchema = {
    // @ts-expect-error - This errors because the index signature type (number)
    // is not assignable to the defined property type (string).
    name: string;
    [key: string]: number
};

// This Schema can be expressed in TypeScript, as the unevaluatedProperties
// allows properties of the same type as the defined properties.
const unevaluatedPropertiesStringSchema = {
    "type": "object",
    "properties": {
        "name": { "type": "string" }
    },
    "unevaluatedProperties": { "type": "string" }
}

type UnevaluatedPropertiesStringSchema = {
    name: string;
    [key: string]: string
};

const unevaluatedPropertiesStringValue1: UnevaluatedPropertiesStringSchema = {
    name: "John",
    age: "30",
    city: "New York"
};

const unevaluatedPropertiesStringValue2: UnevaluatedPropertiesStringSchema = {
    name: "John",
    // @ts-expect-error - Error: age should be a string
    age: 30,
    city: "New York"
};