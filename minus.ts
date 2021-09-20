export interface Interface {
  a: number;
  b: number;
}

export default function ({ a, b }: Interface): number {
  return a - b;
}
