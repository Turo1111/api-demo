import { ObjectId, Types } from 'mongoose'

export interface Sale {
  _id: Types.ObjectId
  user: ObjectId
  cliente: string
  //Crear enum estado y colecion para cliente
  total: number
  createdAt: string
  itemsSale: ItemSale[]
}

export interface ItemSale {
  _id?: Types.ObjectId
  idVenta: Types.ObjectId
  idProducto: Types.ObjectId
  cantidad: number
  total: number
  precio: number
  descripcion?: string
}
