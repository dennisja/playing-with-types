// Create a generic called ArrayOf that takes two arguments
// a value and a number N and returns an array of N items
// ArrayOf<"😅", 5> should be ["😅", "😅", "😅", "😅", "😅"]

type ArrayOf<A, N> = any;

type Smiles = ArrayOf<"😅", 5>;

export {};
