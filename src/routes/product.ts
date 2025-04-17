import { Router } from 'express'
import { checkJwt } from '../middleware/session'
import { deleteItem, getAllItems, getItem, getItems, postItem, postMultipleItem, printList, uptdateItem, uptdateItems } from '../controllers/product'

const router = Router()

router.get('/:id', checkJwt, getItem)
router.get('/', checkJwt, getAllItems)
router.post('/skip', checkJwt, getItems)
router.post('/search', checkJwt, getItems)
router.post('/', checkJwt, postItem) 
router.post('/multiple', checkJwt, postMultipleItem) 
router.patch('/:id', checkJwt, uptdateItem)
router.patch('/', checkJwt, uptdateItems)
router.delete('/:id', checkJwt, deleteItem)
router.post('/print/print', checkJwt, printList)

export { router }
