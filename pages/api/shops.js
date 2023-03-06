import { supabase } from '../../lib/supabaseClient.js'



export default async function handler(req, res) {
    const {method} = req

    if (method === 'GET') {
        const {data: shops, error} = await supabase.from('shops').select('*')

        if (error) {
            res.status(500).json({error: error.message})
        } else {
            res.status(200).json(shops)
        }
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({error: `Method ${method} not allowed`})
    }
}

