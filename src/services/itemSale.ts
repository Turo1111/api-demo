import { Types } from 'mongoose'
import { ItemSale } from '../interfaces/sale.interface'
import ItemSaleModel from '../models/itemSale'

const insertItemSale = async (item: ItemSale): Promise<ItemSale> => {
  console.log("insert item sale",item)
  const responseInsert = await ItemSaleModel.create(item)
  return responseInsert
}

const getItemSales = async (): Promise<ItemSale[]> => {
  const response = await ItemSaleModel.find({})
  return response
}

const getItemSale = async (id: Types.ObjectId): Promise<any> => {
  return await ItemSaleModel.aggregate(
    [
      {
        $match: {
          idVenta: id
        }
      },
      {
        $lookup: {
          from: 'products',
          localField: 'idProducto',
          foreignField: '_id',
          as: 'producto'
        }
      },
      {
        $unwind: '$producto'
      },
      {
        $project: {
          idVenta: 1,
          _id: 1,
          idProducto: 1,
          cantidad: 1,
          total: 1,
          precioUnitario: '$producto.precioUnitario',
          precio: 1,
          descripcion: '$producto.descripcion',
          stock: '$producto.stock',
          peso: '$producto.peso',
          sabor: '$producto.sabor',
          categoria: '$producto.categoria'
        }
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'categoria',
          foreignField: '_id',
          as: 'categoria'
        }
      },
      {
        $unwind: '$categoria'
      },
      {
        $project: {
          _id: 1, 
          estado: 1,
          idVenta: 1,
          idProducto: 1,
          cantidad: 1,
          total: 1,
          modificado: 1,
          precioUnitario: 1,
          precio: 1,
          descripcion: 1,
          stock: 1,
          peso: 1,
          sabor: 1,
          categoria: '$categoria.descripcion'
        }
      },
      {
        $sort: { descripcion: 1 } // Ordena alfabéticamente por el campo 'descripcion' (1 = ascendente, -1 = descendente)
      }
    ]
  );
}

const updateItemsSale = async (id: Types.ObjectId, item: Partial<ItemSale>): Promise<any> => {
  console.log('update item sale', item, id)
  const response = await ItemSaleModel.updateOne({ _id: id }, { $set: item })
  return response
}

const deleteItemsSale = async (id: Types.ObjectId): Promise<any> => {
  const response = await ItemSaleModel.deleteOne({ _id: id })
  return response
}


export { insertItemSale, getItemSales, getItemSale, updateItemsSale, deleteItemsSale }
