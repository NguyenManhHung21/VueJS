import { MongoClient } from 'mongodb'

import dotenv from 'dotenv'

dotenv.config();

export const initMongoDb = async () => {
    try {
        const client = await MongoClient.connect(process.env.URL);
        const db = client.db('Ecommerce-Vue');
        const products = db.collection('products');
        const users = db.collection('users');
        return { products, users }
    } catch (error) {
        console.log(error);
    }
}