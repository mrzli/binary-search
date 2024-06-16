/**
 * Binary search for the index of an exact value in a sorted array.
 * If the value is not found, the function returns -1.
 *
 * @param array The array to search.
 * @param value The value to search for.
 * @returns The index of the value in the array.
 */
export function binarySearchIndexExact(
  array: readonly number[],
  value: number,
): number {
  if (array.length === 0 || value < array[0] || value > array.at(-1)!) {
    return -1;
  }

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = array[mid];

    if (midVal === value) {
      return mid;
    } else if (midVal < value) {
      start = mid + 1;
    } else if (midVal > value) {
      end = mid - 1;
    }
  }

  return -1;
}

/**
 * Binary search for the index of an exact value in a sorted array.
 * Array can be of any type - a selector function
 *   is used to extract the value to compare to.
 * If the value is not found, the function returns -1.
 *
 * @param array The array to search.
 * @param value The value to search for.
 * @param selector A function that returns a number used in comparison.
 * @returns The index of the value in the array.
 */
export function binarySearchWithSelectorIndexExact<T>(
  array: readonly T[],
  value: number,
  selector: (item: T) => number,
): number {
  if (
    array.length === 0 ||
    value < selector(array[0]) ||
    value > selector(array.at(-1)!)
  ) {
    return -1;
  }

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = selector(array[mid]);

    if (midVal === value) {
      return mid;
    } else if (midVal < value) {
      start = mid + 1;
    } else if (midVal > value) {
      end = mid - 1;
    }
  }

  return -1;
}
