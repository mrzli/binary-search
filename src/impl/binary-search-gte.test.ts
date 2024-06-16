import { describe, expect, it } from '@jest/globals';
import {
  binarySearchIndexGte,
  binarySearchWithSelectorIndexGte,
} from './binary-search-gte';
import { exampleBetween, exampleEmpty, examplesAt } from './_test/test-data';
import { Example } from './_test/types';
import { range } from './_test/test-util';

describe('binary-search-gte', () => {
  const EXAMPLES: readonly Example<number>[] = [
    exampleEmpty(-1),
    ...examplesAt([
      [-1, 0],
      [11, -1],
      ...range(0, 11, 1).map((value) => [value, value] as const),
    ]),
    exampleBetween(1, 1, 2),
    exampleBetween(1, 9, 2),
    exampleBetween(8, 5, 9),
  ];

  describe('binarySearchIndexGte()', () => {
    for (const example of EXAMPLES) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchIndexGte(value, array);
        expect(actual).toEqual(example.expected);
      });
    }
  });

  describe('binarySearchWithSelectorIndexGte()', () => {
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

    const SELECTOR = (item: Item): number => item.value;

    for (const example of examples) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchWithSelectorIndexGte(value, array, SELECTOR);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
