import { supabase } from '../../lib/supabaseClient.js';

export default async function orderHandler(req, res) {
    const { product_id, quantity } = req.body;
    try {
        await supabase.rpc('begin');
        const { data: products, error } = await supabase.from('products').select('sales_count, stock_count').eq('id', product_id).single()
        if (error) {
            throw error
        }
        if (products.stock_count < quantity) {
            throw new Error('The quantity you gave is much more than is available')
        }
        const { error: updateError } = await supabase.from('products').update({
            stock_count: products.stock_count - quantity,
            sales_count: products.sales_count + quantity
        }).eq('id', product_id)

        if (updateError) {
            throw updateError
        }
        await supabase.rpc('commit');
        res.status(200).json({message: "Order placed successfully"})
    } catch (error) {
        await supabase.rpc('rollback')

        res.status(500).json({message: error.message})
    }

}
