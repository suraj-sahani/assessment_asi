import { products } from "./constants";
import { CategoryGroup, Product } from "./types";

export function getProductById(id: string): Product | null {
  const index = parseInt(id, 10);
  if (isNaN(index) || index < 0 || index >= products.length) {
    return null;
  }
  return (products as Product[])[index];
}

export function getCategorizedProducts(): CategoryGroup[] {
  const categories = new Map<string, Product[]>();

  (products as Product[]).forEach((product) => {
    if (!categories.has(product.category)) {
      categories.set(product.category, []);
    }
    categories.get(product.category)!.push(product);
  });

  const categoryOrder = ["Cars", "Bikes", "Phones", "Computers"];
  const sorted: CategoryGroup[] = [];

  categoryOrder.forEach((category) => {
    if (categories.has(category)) {
      sorted.push({
        name: category,
        items: categories.get(category)!,
      });
    }
  });

  return sorted;
}

export function getAllProducts(): Product[] {
  return products as Product[];
}

export function getProductIndexById(id: string): number {
  return parseInt(id, 10);
}
