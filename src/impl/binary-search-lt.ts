/**
 * Binary search for the index of an value in a sorted array
 *   which is strictly less than the value provided as input.
 * If there is no such value, the function returns -1.
 *
 * @param array The array to search.
 * @param value The value to search for.
 * @returns The index of the value in the array.
 */
export function binarySearchIndexLt(
  array: readonly number[],
  value: number,
): number {
  if (array.length === 0 || value <= array[0]) {
    return -1;
  }

  if (value > array.at(-1)!) {
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
      return closestLesser;
    }
  }

  return closestLesser;
}

/**
 * Binary search for the index of an value in a sorted array
 *   which is strictly less than the value provided as input.
 * Array can be of any type - a selector function
 *   is used to extract the value to compare to.
 * If there is no such value, the function returns -1.
 *
 * @param array The array to search.
 * @param value The value to search for.
 * @param selector A function that returns a number used in comparison.
 * @returns The index of the value in the array.
 */
export function binarySearchWithSelectorIndexLt<T>(
  array: readonly T[],
  value: number,
  selector: (item: T) => number,
): number {
  if (array.length === 0 || value <= selector(array[0])) {
    return -1;
  }

  if (value > selector(array.at(-1)!)) {
    return array.length - 1;
  }

  let start = 0;
  let end = array.length - 1;
  let closestLesser = start;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = selector(array[mid]);

    if (midVal < value) {
      closestLesser = mid;
      start = mid + 1;
    } else if (midVal > value) {
      end = mid - 1;
    } else {
      return closestLesser;
    }
  }

  return closestLesser;
}
