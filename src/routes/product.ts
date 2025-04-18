import { Router } from 'express'
import { deleteItem, getAllItems, getItem, getItems, postItem, postMultipleItem, printList, uptdateItem, uptdateItems } from '../controllers/product'

const router = Router()

router.get('/:id', getItem)
router.get('/', getAllItems)
router.post('/skip', getItems)
router.post('/search', getItems)
router.post('/', postItem) 
router.post('/multiple', postMultipleItem) 
router.patch('/:id', uptdateItem)
router.patch('/', uptdateItems)
router.delete('/:id', deleteItem)
router.post('/print/print', printList)

export { router }
