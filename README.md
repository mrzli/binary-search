# Binary Search

This library contains functions for binary search of sorted arrays.

## Installation

```bash
npm install --save @gmjs/binary-search
```

## Usage

### General

All functions return an index of the found element or `-1` if the element is not found.

Function have the following name formats:

- `binarySearchIndex<comparison-type>`
- `binarySearchIndex<comparison-type>Abitrary`

### Comparison Types

There are five built-in 'comparison types' that can be used when searching:

- `Exact` - Searched value must be exactly equal to the element.
- `Lte` - Returns the index of the largest element that is less than or equal to the searched value.
- `Lt` - Returns the index of the largest element that is strictly less than the searched value.
- `Gte` - Returns the index of the smallest element that is greater than or equal to the searched value.
- `Gt` - Returns the index of the smallest element that is strictly greater than the searched value.

The above comparison types are part of the function name. For example, if we wanted to have an exact search on a simple number array, we would use the function `binarySearchIndexExact`.

### Types of Arrays

#### `number` Arrays

Binary search on simple number arrays have the following name format:

`binarySearchIndex<comparison-type>`

#### Arbitrary Arrays

Binary search on arbitrary arrays have the following name format:

`binarySearchIndex<comparison-type>Arbitrary`

You are required to provide a comparison function that will be used to compare the searched value with the elements of the array.

Value and element do not have to be of the same type.

Arrays still need to be sorted with regards to the comparison function. This means, for example, that if the comparison function returns 'less than' for comparison of the input value with an element at index `i`, it should also return 'less than' for comparison of the input value with any element at index `j` where `j > i`.

### Parameters

All functions accept the following parameters:

- `value` - The value to search for.
- `array` - The array to search in. Must be sorted.

Additionally, `*Arbitrary` functions also accept the following parameter:

- `compare` - The comparison function to use.

#### `compare` function

Compare function has two parameters:

- `value` - The value to search for.
- `item` - The element of the array the value is currently being compared to.

Function returns a `number`:

- `0` - if `value` is equal to `item`.
- Any negative value if `value` is less than `item`.
- Any positive value if `value` is greater than `item`.

## API Listing

- [`binarySearchIndexExact`](#binarysearchindexexact) - Returns the index of the value in the array. Value needs to be exactly equal to the element at the index.
- [`binarySearchIndexExactArbitrary`](#binarysearchindexexactarbitrary) - Returns the index of the value in the array. Value needs to be exactly equal to the element at the index, as determined by the comparison function.
- [`binarySearchIndexLte`](#binarysearchindexlte) - Returns the index of the largest element that is less than or equal to the value.
- [`binarySearchIndexLteArbitrary`](#binarysearchindexltearbitrary) - Returns the index of the largest element that is less than or equal to the value, as determined by the comparison function.
- [`binarySearchIndexLt`](#binarysearchindexlt) - Returns the index of the largest element that is strictly less than the value.
- [`binarySearchIndexLtArbitrary`](#binarysearchindexltarbitrary) - Returns the index of the largest element that is strictly less than the value, as determined by the comparison function.
- [`binarySearchIndexGte`](#binarysearchindexgte) - Returns the index of the smallest element that is greater than or equal to the value.
- [`binarySearchIndexGteArbitrary`](#binarysearchindexgtearbitrary) - Returns the index of the smallest element that is greater than or equal to the value, as determined by the comparison function.
- [`binarySearchIndexGt`](#binarysearchindexgt) - Returns the index of the smallest element that is strictly greater than the value.
- [`binarySearchIndexGtArbitrary`](#binarysearchindexgtarbitrary) - Returns the index of the smallest element that is strictly greater than the value, as determined by the comparison function.

## API

In the examples below, when using the `number` array functions, we will assume that the following array is initialized:

```ts
const array = [0, 10, ..., 100];
```

When using the `*Arbitrary` functions, we will assume that the following comparison array is initialized:

```ts
interface Item {
  readonly value: number;
}

const array = [
  { value: 0 },
  { value: 10 },
  ...
  { value: 100 }
];
```

Also, when using the `*Arbitrary` functions, we will assume that the following comparison function is specified:

```ts
const compare = (value: number, item: Item): number => value - item.value;
```

### `binarySearchIndexExact`

Returns the index of the value in the array. Value needs to be exactly equal to the element at the index.

```ts
const i1 = binarySearchIndexExact(10, array); // 1
const i2 = binarySearchIndexExact(100, array); // 10
const i3 = binarySearchIndexExact(15, array); // -1
const i4 = binarySearchIndexExact(-10, array); // -1
const i5 = binarySearchIndexExact(110, array); // -1
```

### `binarySearchIndexExactArbitrary`

Returns the index of the value in the array. Value needs to be exactly equal to the element at the index, as determined by the comparison function.

```ts
const i1 = binarySearchIndexExactArbitrary(10, array, compare); // 1
const i2 = binarySearchIndexExactArbitrary(100, array, compare); // 10
const i3 = binarySearchIndexExactArbitrary(15, array, compare); // -1
const i4 = binarySearchIndexExactArbitrary(-10, array, compare); // -1
const i5 = binarySearchIndexExactArbitrary(110, array, compare); // -1
```

### `binarySearchIndexLte`

Returns the index of the largest element that is less than or equal to the value.

```ts
const i1 = binarySearchIndexLte(10, array); // 1
const i2 = binarySearchIndexLte(100, array); // 10
const i3 = binarySearchIndexLte(15, array); // 1
const i4 = binarySearchIndexLte(-10, array); // -1
const i5 = binarySearchIndexLte(110, array); // 10
```

### `binarySearchIndexLteArbitrary`

Returns the index of the largest element that is less than or equal to the value, as determined by the comparison function.

```ts
const i1 = binarySearchIndexLteArbitrary(10, array, compare); // 1
const i2 = binarySearchIndexLteArbitrary(100, array, compare); // 10
const i3 = binarySearchIndexLteArbitrary(15, array, compare); // 1
const i4 = binarySearchIndexLteArbitrary(-10, array, compare); // -1
const i5 = binarySearchIndexLteArbitrary(110, array, compare); // 10
```

### `binarySearchIndexLt`

Returns the index of the largest element that is strictly less than the value.

```ts
const i1 = binarySearchIndexLt(10, array); // 0
const i2 = binarySearchIndexLt(100, array); // 9
const i3 = binarySearchIndexLt(15, array); // 1
const i4 = binarySearchIndexLt(-10, array); // -1
const i5 = binarySearchIndexLt(110, array); // 10
```

### `binarySearchIndexLtArbitrary`

Returns the index of the largest element that is strictly less than the value, as determined by the comparison function.

```ts
const i1 = binarySearchIndexLtArbitrary(10, array, compare); // 0
const i2 = binarySearchIndexLtArbitrary(100, array, compare); // 9
const i3 = binarySearchIndexLtArbitrary(15, array, compare); // 1
const i4 = binarySearchIndexLtArbitrary(-10, array, compare); // -1
const i5 = binarySearchIndexLtArbitrary(110, array, compare); // 10
```

### `binarySearchIndexGte`

Returns the index of the smallest element that is greater than or equal to the value.

```ts
const i1 = binarySearchIndexGte(10, array); // 1
const i2 = binarySearchIndexGte(100, array); // 10
const i3 = binarySearchIndexGte(15, array); // 2
const i4 = binarySearchIndexGte(-10, array); // 0
const i5 = binarySearchIndexGte(110, array); // -1
```

### `binarySearchIndexGteArbitrary`

Returns the index of the smallest element that is greater than or equal to the value, as determined by the comparison function.

```ts
const i1 = binarySearchIndexGteArbitrary(10, array, compare); // 1
const i2 = binarySearchIndexGteArbitrary(100, array, compare); // 10
const i3 = binarySearchIndexGteArbitrary(15, array, compare); // 2
const i4 = binarySearchIndexGteArbitrary(-10, array, compare); // 0
const i5 = binarySearchIndexGteArbitrary(110, array, compare); // -1
```

### `binarySearchIndexGt`

Returns the index of the smallest element that is strictly greater than the value.

```ts
const i1 = binarySearchIndexGt(10, array); // 2
const i2 = binarySearchIndexGt(100, array); // -1
const i3 = binarySearchIndexGt(15, array); // 2
const i4 = binarySearchIndexGt(-10, array); // 0
const i5 = binarySearchIndexGt(110, array); // -1
```

### `binarySearchIndexGtArbitrary`

Returns the index of the smallest element that is strictly greater than the value, as determined by the comparison function.

```ts
const i1 = binarySearchIndexGtArbitrary(10, array, compare); // 2
const i2 = binarySearchIndexGtArbitrary(100, array, compare); // -1
const i3 = binarySearchIndexGtArbitrary(15, array, compare); // 2
const i4 = binarySearchIndexGtArbitrary(-10, array, compare); // 0
const i5 = binarySearchIndexGtArbitrary(110, array, compare); // -1
```
