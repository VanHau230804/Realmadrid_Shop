export interface ICartItem {
  [x: string]: unknown;
  _id?: string;
  name: string;
  images: { url: string }[];
  price: number;
  size: { _id: string; label: string }[];
  categoryID: string;
  userId: string;
  quantity?: number;
}
