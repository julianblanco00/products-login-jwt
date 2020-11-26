import { Router } from 'express'

import createProduct from '../controllers/products/createProduct';
import getProducts from '../controllers/products/getProducts';
import getProduct from '../controllers/products/getProduct';
import updateProduct from '../controllers/products/updateProduct';
import deleteProduct from '../controllers/products/deleteProduct';

import { verifyToken, isModeratorOrAdmin } from '../middlewares/auth-jwt';

const router = Router()

router.post('/', [ verifyToken, isModeratorOrAdmin ], createProduct.create)

router.get('/', getProducts.getAll)

router.get('/:id', getProduct.get)

router.delete('/:id', [ verifyToken, isModeratorOrAdmin ], deleteProduct.delete)

router.put('/:id', [ verifyToken, isModeratorOrAdmin ], updateProduct.update)

export default router;