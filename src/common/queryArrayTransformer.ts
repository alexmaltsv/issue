export const queryArrayTransformer = <T>({ value }: { value: T }) =>
  Array.isArray(value) ? value : [value];
