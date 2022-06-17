const product = {
  id: "1",
  name: "Nuts",
  price: 12,
  isEnabled: true,
};

type PropEventsHandler<Type> = {
  on<Key extends string & keyof Type>(
    event: `${Key}Changed`,
    handler: (value: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject2<Type>(
  x: Type
): Type & PropEventsHandler<Type>;
const watchedProduct = makeWatchedObject2(product);
watchedProduct.on("priceChanged", (newId) => {});

export {};
