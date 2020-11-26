import Product from '../../models/products'

const updateProduct = async (req, res) => {
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate( req.params.id, req.body, {
            new: true
        })
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json(err)
    }
}

export default { update: updateProduct }