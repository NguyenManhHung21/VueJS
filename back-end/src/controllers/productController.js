import { initMongoDb } from "../../configdb/db"

const getAllProducts = async (req, res) => {
    try {
        const db = await initMongoDb();
        const products = await db.products.find().toArray();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }

}

const getProductById = async (req, res) => {
    const { productId } = req.params;
    try {
        const db = await initMongoDb();
        const product = await db.products.findOne({ id: productId })
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

export { getAllProducts, getProductById }