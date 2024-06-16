import { describe, expect, it } from '@jest/globals';
import {
  binarySearchIndexLt,
  binarySearchIndexLtArbitrary,
} from './binary-search-lt';
import { exampleBetween, exampleEmpty, examplesAt } from './_test/test-data';
import { Example } from './_test/types';
import { range } from './_test/test-util';

describe('binary-search-lt', () => {
  const EXAMPLES: readonly Example<number>[] = [
    exampleEmpty(-1),
    ...examplesAt([
      [-1, -1],
      [11, 10],
      [0, -1],
      ...range(1, 11, 1).map((value) => [value, value - 1] as const),
    ]),
    exampleBetween(1, 1, 1),
    exampleBetween(1, 9, 1),
    exampleBetween(8, 5, 8),
  ];

  describe('binarySearchIndexLt()', () => {
    for (const example of EXAMPLES) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchIndexLt(value, array);
        expect(actual).toEqual(example.expected);
      });
    }
  });

  describe('binarySearchIndexLtArbitrary()', () => {
    interface Item {
      readonly value: number;
    }

    const examples: readonly Example<Item>[] = EXAMPLES.map((example) => ({
      ...example,
      input: {
        ...example.input,
        array: example.input.array.map((value) => ({ value })),
      },
    }));

    const COMPARE = (value: number, item: Item): number => value - item.value;

    for (const example of examples) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchIndexLtArbitrary(value, array, COMPARE);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
