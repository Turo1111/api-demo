import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, uptdateItem } from '../controllers/brand'

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.patch('/:id', uptdateItem)
router.delete('/:id', deleteItem)

export { router }
