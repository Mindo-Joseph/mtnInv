import {createProduct, getProductById, updateProduct, deleteProduct} from "../../utils/product.js";

export default async function handler(req, res) {
    const {method, query, body} = req;

    switch (method) {
        case "GET":
            if (query.id) {
                const product = await getProductById(query.id);
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({message: "Product not found"});
                }
            } else {
                res.status(400).json({message: "Missing product ID"});
            }
            break;
        case "POST":
            const {name, description, price, shop_id} = body;
            if (name && price && shop_id) {
                const newProduct = await createProduct(name, description, price, shop_id);
                res.status(201).json(newProduct);
            } else {
                res.status(400).json({message: "Missing required fields"});
            }
            break;
        case "PUT":
            if (query.id) {
                const {name, description, price, shop_id} = body;
                if (name && price && shop_id) {
                    const updatedProduct = await updateProduct(query.id, name, description, price, shop_id);
                    if (updatedProduct) {
                        res.status(200).json(updatedProduct);
                    } else {
                        res.status(404).json({message: "Product not found"});
                    }
                } else {
                    res.status(400).json({message: "Missing required fields"});
                }
            } else {
                res.status(400).json({message: "Missing product ID"});
            }
            break;
        case "DELETE":
            if (query.id) {
                const result = await deleteProduct(query.id);
                if (result) {
                    res.status(200).json({message: "Product deleted successfully"});
                } else {
                    res.status(404).json({message: "Product not found"});
                }
            } else {
                res.status(400).json({message: "Missing product ID"});
            }
            break;
        default: res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).json({message: `Method ${method} Not Allowed`});
    }
}

