export interface Item{
    id: string,
    nombre: string,
    precio: number,
    descripcion: string,
    imagen: string,
    categoria: string,
    stock: number,
}

export interface ItemInCart{
    id: string,
    nombre: string,
    precio: number,
    descripcion: string,
    imagen: string,
    categoria: string,
    stock: number,
    cantidad: number,
    total: number,
}

export interface Order{
    id: string,
    totalPrice: number,
    status: string,
    date: Date,
    shipping: number,
    client: Client,
    products?: ProductInOrder[]
}

export interface Client{
    name: string,
    phone: string,
    email: string,
    shippingAdress: string,
    id: string
}

export interface ProductInOrder{
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
}