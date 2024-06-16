import { describe, expect, it } from '@jest/globals';
import {
  binarySearchIndexGt,
  binarySearchWithSelectorIndexGt,
} from './binary-search-gt';
import { exampleBetween, exampleEmpty, examplesAt } from './_test/test-data';
import { Example } from './_test/types';
import { range } from './_test/test-util';

describe('binary-search-gt', () => {
  const EXAMPLES: readonly Example<number>[] = [
    exampleEmpty(-1),
    ...examplesAt([
      [-1, 0],
      [11, -1],
      ...range(0, 10, 1).map((value) => [value, value + 1] as const),
      [10, -1],
    ]),
    exampleBetween(1, 1, 2),
    exampleBetween(1, 9, 2),
    exampleBetween(8, 5, 9),
  ];

  describe('binarySearchIndexGt()', () => {
    for (const example of EXAMPLES) {
      it(example.description, () => {
        const { value, array } = example.input;

        const actual = binarySearchIndexGt(value, array);
        expect(actual).toEqual(example.expected);
      });
    }
  });

  describe('binarySearchWithSelectorIndexGt()', () => {
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

        const actual = binarySearchWithSelectorIndexGt(value, array, SELECTOR);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
