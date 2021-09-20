import plus, { Interface as Plus } from './plus';
import minus, { Interface as Minus } from './minus';

const calc = { plus, minus };

const [, , a, operator, b] = process.argv;
const input: Plus | Minus = {
  a: parseInt(a),
  b: parseInt(b),
};

const ans: number = calc[operator](input);
console.log({ ans });
