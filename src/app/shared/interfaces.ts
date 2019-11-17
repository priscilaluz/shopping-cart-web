export interface Item {
    id: string;
    name: string;
    value: number;
}
export interface User {
    id: string;
    name: string;
    email: string;
    shoppingcart: ShoppingCart
}
export interface Shopping {
    id: string;
    amount: number;
    item: Item;
}
export interface ShoppingCart {
    id: string;
    total: number;
    shoppings: Shopping[];
}