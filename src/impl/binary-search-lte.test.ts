import { describe, expect, it } from '@jest/globals';
import {
  binarySearchIndexLte,
  binarySearchIndexLteArbitrary,
} from './binary-search-lte';
import { exampleEmpty, examplesAt, exampleBetween } from './_test/test-data';
import { Example } from './_test/types';
import { range } from './_test/test-util';

describe('binary-search-lte', () => {
  const EXAMPLES: readonly Example<number>[] = [
    exampleEmpty(-1),
    ...examplesAt([
      [-1, -1],
      [11, 10],
      ...range(0, 11, 1).map((value) => [value, value] as const),
    ]),
    exampleBetween(1, 1, 1),
    exampleBetween(1, 9, 1),
    exampleBetween(8, 5, 8),
  ];

  describe('binarySearchIndexLte()', () => {
    for (const example of EXAMPLES) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchIndexLte(value, array);
        expect(actual).toEqual(example.expected);
      });
    }
  });

  describe('binarySearchIndexLteArbitrary()', () => {
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

        const actual = binarySearchIndexLteArbitrary(value, array, COMPARE);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
