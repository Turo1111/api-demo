import { Schema, model } from 'mongoose'
import { Sale } from '../interfaces/sale.interface'

const SaleSchema = new Schema<Sale>(
  {
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
    },
    cliente: {
      type: String
    },
    total: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const SaleModel = model('sale', SaleSchema)
export default SaleModel
