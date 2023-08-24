import express from 'express'
import { getCartByUserId, getCartIds, removeProductFromCart } from '../controllers/userCartController';
import { addProductToCart } from '../controllers/userCartController';

export const cartRouter = express.Router();

cartRouter.delete('/:userId/cart/:productId', removeProductFromCart);
cartRouter.get('/:userId/cartIds', getCartIds);
cartRouter.get('/:userId/cart', getCartByUserId);
cartRouter.post('/:userId/cart', addProductToCart);

