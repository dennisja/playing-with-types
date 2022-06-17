// Create a generic called ArrayOf that takes two arguments
// a value and a number N and returns an array of N items
// ArrayOf<"😅", 5> should be ["😅", "😅", "😅", "😅", "😅"]

type ArrayOf<Item, N, Result extends Item[] = []> = Result["length"] extends N
  ? Result
  : ArrayOf<Item, N, [...Result, Item]>;

type Smiles = ArrayOf<"😅", 5>;

export type { ArrayOf  };
