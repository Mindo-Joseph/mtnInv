import { supabase } from '../../lib/supabaseClient.js';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(500).json({ error: 'The method is not allowed' });
        return;

    }

    try {
        const { id }  = req.query;
        const { data: productShops, error: productError } = await supabase.from('products').select('*').eq('id', id);
        console.log('The type of this is', id);
        if (productError) {
            throw productError
        }
        const shopIds = productShops.map((productShop) => productShop.shop_id);
        console.log('The shop ids', shopIds)

        const { data: shops, error: shopError } = await supabase.from('shops').select('*').eq('id', shopIds);
        if (shopError) {
            throw shopError
        }
        return res.status(200).json(shops)
    } catch (e) {
        return e
    }
}
