export interface ICartItem {
  _id: string;
  items: {
    _id: string;
    name: string;
    images: { url: string }[];
    price: number;
    size: { _id: string; label: string }[];
    categoryID: string;
    quantity?: number;
  };
  userId: string;
}
