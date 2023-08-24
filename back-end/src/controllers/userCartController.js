import { initMongoDb } from "../../configdb/db";

const populateCartIds = async (cartItems) => {
    const db = await initMongoDb();
    //Promise.all(//nhận vào 1 array) nhận vào 1 mảng và trả về 1 mảng
    return Promise.all(cartItems.map(id => db.products.findOne({ id })))
}

const getCartByUserId = async (req, res) => {
    const { userId } = req.params;
    const db = await initMongoDb();
    const user = await db.users.findOne({ id: userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.status(200).json(populatedCart);
}
const getCartIds = async (req, res) => {
    const { userId } = req.params;
    const db = await initMongoDb();
    
    const existingUser = await db.users.findOne({ id: userId });

    if (!existingUser) {
        await db.users.insertOne({ id: userId, cartItems: [] });
    }

    const user = await db.users.findOne({ id: userId }, { returnDocument: 'after' });
    res.status(200).json(user.cartItems);
}
const addProductToCart = async (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;
    try {
        const db = await initMongoDb();

        const existingUser = await db.users.findOne({ id: userId });

        if (!existingUser) {
            await db.users.insertOne({ id: userId, cartItems: [] });
        }

        const user = await db.users.findOneAndUpdate({ id: userId }, {
            $addToSet: { cartItems: productId }
        }, { returnDocument: 'after' })

        // const populatedCart = await populateCartIds(user.value.cartItems);
        // res.status(200).json(populatedCart);
        res.status(200).json({ ok: user.ok });
    } catch (error) {
        console.log(error);
    }
}

const removeProductFromCart = async (req, res) => {
    const { userId, productId } = req.params;
    try {
        const db = await initMongoDb();
        const user = await db.users.findOneAndUpdate({ id: userId }, {
            $pull: { cartItems: productId }
        }, { returnDocument: 'after' })
        console.log(user);
        const populatedCart = await populateCartIds(user.value.cartItems);
        res.status(200).json({ cartItems: populatedCart, ok: user.ok });
        // res.status(200).json({ ok: user.ok });

    } catch (error) {
        console.log(error);
    }
}

export { getCartByUserId, addProductToCart, removeProductFromCart, getCartIds }