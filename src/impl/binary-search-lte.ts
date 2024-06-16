/**
 * Binary search for the index of an value in a sorted array
 *   which is less than or equal to the value provided as input.
 * If there is no such value, the function returns -1.
 *
 * @param value The value to search for.
 * @param array The array to search.
 * @returns The index of the value in the array.
 */
export function binarySearchIndexLte(
  value: number,
  array: readonly number[],
): number {
  if (array.length === 0 || value < array[0]) {
    return -1;
  }

  if (value >= array.at(-1)!) {
    return array.length - 1;
  }

  let start = 0;
  let end = array.length - 1;
  let closestLesser = start;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = array[mid];

    if (midVal < value) {
      closestLesser = mid;
      start = mid + 1;
    } else if (midVal > value) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return closestLesser;
}

/**
 * Binary search for the index of an value in a sorted array
 *   which is less than or equal to the value provided as input.
 * Array can be of any type - a compare function is used for comparison.
 * If there is no such value, the function returns -1.
 *
 * @param value The value to search for.
 * @param array The array to search.
 * @param compare A function used to compare the value with an item in the array.
 * @returns The index of the value in the array.
 */
export function binarySearchIndexLteArbitrary<TValue, TItem>(
  value: TValue,
  array: readonly TItem[],
  compare: (value: TValue, item: TItem) => number,
): number {
  if (array.length === 0 || compare(value, array[0]) < 0) {
    return -1;
  }

  if (compare(value, array.at(-1)!) >= 0) {
    return array.length - 1;
  }

  let start = 0;
  let end = array.length - 1;
  let closestLesser = start;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = array[mid];

    if (compare(value, midVal) > 0) {
      closestLesser = mid;
      start = mid + 1;
    } else if (compare(value, midVal) < 0) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return closestLesser;
}
