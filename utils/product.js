import { supabase } from '../lib/supabaseClient.js'

export async function createProduct(name, description, price, shop_id) {
    const {data, error} = await supabase.from("products").insert([{
            name,
            description,
            price,
            shop_id
        },]);

    if (error) {
        console.error(error);
        return null;
    }

    return data[0];
}

// Get a product by ID
export async function getProductById(id) {
    const {data, error} = await supabase.from("products").select("*").eq("id", id).single();

    if (error) {
        console.error(error);
        return null;
    }

    return data;
}

// Update a product
export async function updateProduct(id, name, description, price, shop_id) {
    const {data, error} = await supabase.from("products").update({name, description, price, shop_id}).eq("id", id);

    if (error) {
        console.error(error);
        return null;
    }

    return data[0];
}

// Delete a product
export async function deleteProduct(id) {
    const {error} = await supabase.from("products").delete().eq("id", id);

    if (error) {
        console.error(error);
        return false;
    }

    return true;
}

//get all products
export async function getAllProducts() {
    const { data, error } = await supabase.from("products").select('*');

    if (error) {
        console.error(error)
        return null
    }
    return data
}
