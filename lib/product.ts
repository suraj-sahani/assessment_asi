import { products } from "./constants";
import { CategoryGroup, Product } from "./types";

export function getProductById(id: string): Product | null {
  const sanitizedProductId = parseInt(id, 10);
  const product = products.find((product) => product.id === sanitizedProductId);

  if (!product) return null;

  return product;
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

export const groupByCategory = (items: Product[]) =>
  items.reduce<Record<string, Product[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

export const findCategory = (slug: string) =>
  Object.keys(groupByCategory(products)).find(
    (c) => c.toLowerCase() === slug.toLowerCase(),
  );
