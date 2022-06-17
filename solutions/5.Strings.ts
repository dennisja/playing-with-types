// Write a generic called WordCount. It should take a sentence and return the number of words in the sentence
// e.g WordCount<`Hello World, Its me`> should return
type WordCount<
  Phrase,
  Result extends any[] = [0]
> = Phrase extends `${infer Head} ${infer Tail}`
  ? WordCount<Tail, [...Result, 0]>
  : Result["length"];

type NumberOfWords = WordCount<"Hello From The Server Side">;

// Write a generic called Split. Its takes a sentence and a delimiter and return a list of words in that sentence
// separated by that delimiter
// e.g Given Split<"Hello, World", ", "> we should return ["Hello", "World"]
type Split<
  Phrase,
  Delimiter extends string,
  Result extends string[] = []
> = Phrase extends `${infer Head}${Delimiter}${infer Tail}`
  ? Split<Tail, Delimiter, [...Result, Head]>
  : [...Result, Phrase];

type WordsInPhrase = Split<"Hello From The Server Side", " ">;

export {};
