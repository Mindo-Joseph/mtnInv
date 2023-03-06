import { supabase } from '../../lib/supabaseClient.js'

export default async function getProductsByShopId(req, res) {
    const {shop_id} = req.query

    const {data: products, error} = await supabase.from('products').select('*').eq('shop_id', shop_id)

    if (error) {
        return res.status(500).json({error: error.message})
    }

    return res.status(200).json({products})
}
