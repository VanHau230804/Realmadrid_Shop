export type Size = {
  _id: string;
  label: string;
};
export type KitImage = {
  _id: string;
  url: string;
  // add other properties if needed
};
export interface IKit {
  _id?: string;
  name: string;
  price: string;
  images: KitImage[];
  size: Size[];
  categoryID: object;
}
export interface Category {
  _id: string;
  name: string;
}
