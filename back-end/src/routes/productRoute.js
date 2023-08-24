import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController'
export const productRouter = express.Router();

productRouter.get('/:productId', getProductById);
productRouter.get('/', getAllProducts);

