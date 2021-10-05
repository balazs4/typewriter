type CalculationInputParameter = { a: number; b: number };
type ICalculationFn = (input: CalculationInputParameter) => number;

const plus: ICalculationFn = (input) => input.a + input.b;

const [, , a, b] = process.argv;

const input: CalculationInputParameter = { a: 4, b: 5 };
const result = plus(input);

console.log(result);
