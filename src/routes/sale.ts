import { Router } from 'express'
import { getItem, getItems, postItem, postMultipleItem, printSale, printSales, updateItem } from '../controllers/sale'

const router = Router()

router.get('/', getItems)
router.post('/skip', getItems)
router.post('/search', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.post('/multiple', postMultipleItem)
router.patch('/:id', updateItem)
router.get('/print/:id', printSale)
router.post('/print', printSales)

export { router }
