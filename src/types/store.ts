
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
}

export interface NotificationStore {
    notification: {
        message: string;
        type: AlertColor;
        open: boolean;
    } | null;
    changed: boolean;
    showCart: boolean;
}

export type AlertColor = "success" | "info" | "warning" | "error";
