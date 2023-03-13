
import {supabase} from '../lib/supabaseClient.js'

// Create a new shop
export const createShop = async (shopData) => {
    const {data, error} = await supabase.from('shops').insert(shopData)
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// Update an existing shop
export const updateShop = async (id, shopData) => {
    const {data, error} = await supabase.from('shops').update(shopData).eq('id', id)
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// Delete an existing shop
export const deleteShop = async (id) => {
    const {error} = await supabase.from('shops').delete().eq('id', id)
    if (error) {
        throw new Error(error.message)
    }
    return true
}

