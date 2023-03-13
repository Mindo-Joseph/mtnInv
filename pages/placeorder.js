import { supabase } from "../lib/supabaseClient";

import orderHandler from "./api/order";

export const placeOrder = async (product_id, quantity) => {
    const response = await fetch('/api/order', {
        method: 'POST',
body: JSON.stringify({ product_id, quantity })

    })
    const data = await response.json()
    return data
}
