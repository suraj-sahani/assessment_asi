export interface ItemProp {
  label: string;
  value: string;
}

export interface Product {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProp[];
}

export interface CategoryGroup {
  name: string;
  items: Product[];
}
