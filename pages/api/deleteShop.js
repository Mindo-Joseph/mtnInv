import {deleteShop} from '../../utils/shop'

export default async function handler(req, res) {
    try {
        const {id} = req.query
        await deleteShop(id)
        res.status(204).end()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

