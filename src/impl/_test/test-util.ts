export function range(from: number, to: number, step = 1): readonly number[] {
  const array: number[] = [];
  let v = from;
  while (!isBreakCondition(v, to, step)) {
    array.push(v);
    v += step;
  }
  return array;
}

function isBreakCondition(value: number, to: number, step: number): boolean {
  return step > 0 ? value >= to : value <= to;
}
