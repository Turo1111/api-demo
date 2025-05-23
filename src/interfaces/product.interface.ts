import { ObjectId, Types } from 'mongoose'

export interface Product {
  _id: Types.ObjectId
  descripcion: string
  stock: number
  codigoBarra?: String
  precioCompra?: number
  precioUnitario: number
  categoria: ObjectId | string
  marca: ObjectId | string
  proveedor: ObjectId | string
  NameProveedor?: string,
  NameMarca?: string,
  NameCategoria?: string
  path?: string
}

export interface Categorie {
  descripcion: string
}

export interface Brand {
  descripcion: string
}

export interface Provider {
  descripcion: string
}
