const maxPropertiesTwoSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "maxProperties": 2
}

type UnionToIntersection<U> =
    (U extends any ? (x: U) => void : never) extends
    (x: infer I) => void ? I : never;

type LastOf<U> =
    UnionToIntersection<
        U extends any ? (x: U) => void : never
    > extends (x: infer L) => void ? L : never;

type TuplifyUnion<U, Last = LastOf<U>> =
    [U] extends [never]
    ? []
    : [...TuplifyUnion<Exclude<U, Last>>, Last];

type LengthOfUnion<U> = TuplifyUnion<U>['length'];

/**
 * Object T is allowed only if it has 0, 1 or 2 keys.
 */
type AtMost2<T extends object = {}> =
    LengthOfUnion<keyof T> extends 0 | 1 | 2 ? T : never;

// AtMost2 will only work with a helper function that can infer the generic argument
// The static assignment below will not work as intended
const maxPropertiesTwoValue1: AtMost2 = {
    a: 1,
    b: 2,
};