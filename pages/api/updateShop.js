import {updateShop} from "../../utils/shop";

export default async function handler(req, res) {
    try {
        const {id} = req.query
        const shopData = req.body
        const updatedShop = await updateShop(id, shopData)
        res.status(200).json(updatedShop)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

