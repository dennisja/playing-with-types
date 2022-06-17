import { ArrayOf } from "./3.ArrayOf";

// Create a Generic called Min. That takes two numbers and returns a type whose value is the minimum of the two numbers
// ie Min<12, 20> should return 12. What would you do if you are to restrict this generic to take only numbers?
type Min<A, B, Count extends number[] = []> = Count["length"] extends A
  ? A
  : Count["length"] extends B
  ? B
  : Min<A, B, [...Count, 0]>;

type MinOf5And6 = Min<5, 6>;

// Create a Generic called Max. That takes two numbers and returns a type whose value is the maximum of the two numbers
// ie Max<12, 20> should return 20. What would you do if you are to restrict this generic to take only numbers?
type Max<A, B, Count extends number[] = []> = Count["length"] extends A
  ? B
  : Count["length"] extends B
  ? A
  : Max<A, B, [...Count, 0]>;

type MaxOf5And6 = Max<5, 6>;

// Create a generic called Increment. It takes two numbers and returns a type whose value is the value of that number plus 1
// i.e Increment<5> should return 6. What would you do if you are to restrict this to take only a number?
// type Increment<A, Count extends number[] = []> = Count["length"] extends A
//   ? [...Count, 0]["length"]
//   : Increment<A, [...Count, 0]>;
type Increment<A> = [...ArrayOf<A, A>, A]["length"];

type FivePlusOne = Increment<5>;

// Create a generic called Decrement. It takes two numbers and returns a type whose value is the value of that number plus 1
// i.e Increment<5> should return 4. What would you do if you are to restrict this to take only a number?
type Decrement<A, Count extends number[] = []> = ArrayOf<A, A> extends [
  infer Head,
  ...infer Tail
]
  ? Tail["length"]
  : 0;

type FiveMinusOne = Decrement<5>;

// Create a generic called Add which takes two numbers and returns the sum of the numbers
// i.e Add<13, 7> should return 20
// type Add<A, B> = [...ArrayOf<A, A>, ...ArrayOf<B, B>]["length"];
type Add<A, B> = A extends 0 ? B : Add<Decrement<A>, Increment<B>>;

type SumOf5And6 = Add<5, 6>;

// Create a generic called Subtract which takes two numbers and returns the sum of the numbers
// i.e Subtract<13, 7> should return 6
type Subtract<A, B> = B extends 0 ? A : Subtract<Decrement<A>, Decrement<B>>;

type ThirteenMinus7 = Subtract<13, 7>;

export {};
