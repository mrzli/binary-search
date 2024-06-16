/**
 * Binary search for the index of an value in a sorted array
 *   which is greater than or equal to the value provided as input.
 * If there is no such value, the function returns -1.
 *
 * @param value The value to search for.
 * @param array The array to search.
 * @returns The index of the value in the array.
 */
export function binarySearchIndexGte(
  value: number,
  array: readonly number[],
): number {
  if (array.length === 0 || value > array.at(-1)!) {
    return -1;
  }

  if (value < array[0]) {
    return 0;
  }

  let start = 0;
  let end = array.length - 1;
  let closestGreater = end;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = array[mid];

    if (midVal < value) {
      start = mid + 1;
    } else if (midVal > value) {
      closestGreater = mid;
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return closestGreater;
}

/**
 * Binary search for the index of an value in a sorted array
 *   which is greater than or equal to the value provided as input.
 * Array can be of any type - a compare function is used for comparison.
 * If there is no such value, the function returns -1.
 *
 * @param value The value to search for.
 * @param array The array to search.
 * @param compare A function used to compare the value with an item in the array.
 * @returns The index of the value in the array.
 */
export function binarySearchWithSelectorIndexGte<T>(
  value: number,
  array: readonly T[],
  selector: (item: T) => number,
): number {
  if (array.length === 0 || value > selector(array.at(-1)!)) {
    return -1;
  }

  if (value < selector(array[0])) {
    return 0;
  }

  let start = 0;
  let end = array.length - 1;
  let closestGreater = end;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = selector(array[mid]);

    if (midVal < value) {
      start = mid + 1;
    } else if (midVal > value) {
      closestGreater = mid;
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return closestGreater;
}
