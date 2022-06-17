// We have a function that creates either a custom product or a catalog product 
// based on the given type. To ensure that we are having the correct type, we are using 
// function overloads. Re write this to use conditional types
type ProductType = "custom" | "catalog";

type CatalogProduct = { id: string; name: string; type: "catalog" };
type CustomProduct = { externalId: string; name: string; type: "custom" };

function createProduct(type: "custom"): CustomProduct;
function createProduct(type: "catalog"): CatalogProduct;
function createProduct(type: ProductType): CustomProduct | CatalogProduct;
function createProduct(type: ProductType): CustomProduct | CatalogProduct {
  throw "un implemented";
}

const catalogProduct = createProduct("catalog");
const customProduct = createProduct("custom");

export = {};
