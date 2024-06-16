import { range } from './test-util';
import { Example } from './types';

const STRIDE = 10;
const COUNT = 10;

const ARRAY: readonly number[] = range(0, COUNT * STRIDE + 1, STRIDE);

export function exampleEmpty(expected: number): Example<number> {
  return {
    description: 'empty array',
    input: {
      value: 0,
      array: [],
    },
    expected,
  };
}

export function exampleAt(index: number, expected: number): Example<number> {
  return {
    description: `at ${index}`,
    input: {
      value: index * STRIDE,
      array: ARRAY,
    },
    expected,
  };
}

export function examplesAt(
  values: readonly (readonly [number, number])[],
): readonly Example<number>[] {
  return values.map(([index, expected]) => exampleAt(index, expected));
}

export function exampleBetween(
  firstIndex: number,
  offset: number,
  expected: number,
): Example<number> {
  return {
    description: `between ${firstIndex} and ${firstIndex + 1} (${offset})`,
    input: {
      value: firstIndex * STRIDE + offset,
      array: ARRAY,
    },
    expected,
  };
}
