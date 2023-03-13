import { createShop } from "../../utils/shop";

export default async function handler(req, res) {
    try {
        const shopData = req.body
        const newShop = await createShop(shopData)
        res.status(201)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
