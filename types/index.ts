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