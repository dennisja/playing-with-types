// Write a generic called WordCount. It should take a sentence and return the number of words in the sentence
// e.g WordCount<`Hello World, Its me`> should return
type WordCount<Phrase> = any;

type NumberOfWords = WordCount<"Hello From The Server Side">;

// Write a generic called Split. Its takes a sentence and a delimiter and return a list of words in that sentence
// separated by that delimiter
// e.g Given Split<"Hello, World", ", "> we should return ["Hello", "World"]
type Split<Phrase, Delimiter> = any;

type WordsInPhrase = Split<"Hello From The Server Side", " ">;
