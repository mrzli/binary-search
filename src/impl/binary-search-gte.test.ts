import { describe, expect, it } from '@jest/globals';
import {
  binarySearchIndexGte,
  binarySearchWithSelectorIndexGte,
} from './binary-search-gte';
import { range } from './_test/test-util';

describe('binary-search-gte', () => {
  const ARRAY: readonly number[] = range(0, 101, 10);

  interface Example<T> {
    readonly description: string;
    readonly input: {
      readonly array: readonly T[];
      readonly value: number;
    };
    readonly expected: number;
  }

  const EXAMPLES: readonly Example<number>[] = [
    {
      description: 'empty array',
      input: {
        array: [],
        value: 0,
      },
      expected: -1,
    },
    {
      description: 'before first',
      input: {
        array: ARRAY,
        value: -10,
      },
      expected: 0,
    },
    {
      description: 'after last',
      input: {
        array: ARRAY,
        value: 110,
      },
      expected: -1,
    },
    {
      description: 'first',
      input: {
        array: ARRAY,
        value: 0,
      },
      expected: 0,
    },
    {
      description: 'second',
      input: {
        array: ARRAY,
        value: 10,
      },
      expected: 1,
    },
    {
      description: 'last',
      input: {
        array: ARRAY,
        value: 100,
      },
      expected: 10,
    },
    {
      description: 'between 1 and 2, not exact (1)',
      input: {
        array: ARRAY,
        value: 11,
      },
      expected: 2,
    },
    {
      description: 'between 1 and 2, not exact (2)',
      input: {
        array: ARRAY,
        value: 19,
      },
      expected: 2,
    },
    {
      description: 'between 8 and 9, not exact',
      input: {
        array: ARRAY,
        value: 85,
      },
      expected: 9,
    },
  ];

  describe('binarySearchIndexGte()', () => {
    for (const example of EXAMPLES) {
      it(example.description, () => {
        const { array, value } = example.input;

        const actual = binarySearchIndexGte(array, value);
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
        const { array, value } = example.input;

        const actual = binarySearchWithSelectorIndexGte(array, value, SELECTOR);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
