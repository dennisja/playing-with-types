// Given the product below
// make a type named makeWatchedProduct such that when given a product
// we get back a type which has a change event handler for each and every property
// of the object.
// Given
// const watchedProduct = makeWatchedProduct(product)
// watchedProduct should have a function called on that handles changes of any of the properties
// i.e
// watchedProduct.on('priceChange', (newPice: number)=>{
//
// })
//
const product = {
  id: "1",
  name: "Nuts",
  price: 12,
  isEnabled: true,
};

export {};
