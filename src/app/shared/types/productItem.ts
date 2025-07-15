export type ProductItem = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export type BlogItem = {
    id?: number; // ? -> it can be undefined 
    title?: string;
    body?: string;
    author: string;
}