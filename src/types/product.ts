export interface ProductStore {
    id: number,
    name: string,
    quantity: number,
    price: number,
    totalPrice: number
}

export interface CartState {
    itemsList: ProductStore[];
    totalQuantity: number;
    showCart: boolean;
  }