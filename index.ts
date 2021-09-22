type ICalculationFn = (input: { a: number; b: number }) => number;

const plus: ICalculationFn = (input) => input.a + input.b;

const [, , a, b] = process.argv;

const result = plus({ a: parseInt(a), b: parseInt(b) });

console.log(result);
