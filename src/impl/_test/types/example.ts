export interface Example<T> {
  readonly description: string;
  readonly input: {
    readonly value: number;
    readonly array: readonly T[];
  };
  readonly expected: number;
}
