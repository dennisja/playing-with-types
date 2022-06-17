type ProductType = "custom" | "catalog";

type CatalogProduct = { id: string; name: string; type: "catalog" };
type CustomProduct = { externalId: string; name: string; type: "custom" };

type CatalogOrCustomProduct<T extends ProductType> = T extends "custom"
  ? CustomProduct
  : CatalogProduct;

function createProduct<T extends ProductType>(
  type: T
): CatalogOrCustomProduct<T> {
  throw "not implemented";
}

const catalogProduct = createProduct("catalog");
const customProduct = createProduct("custom");

export = {};
