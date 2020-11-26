import Product from '../../models/products'

const getProduct = async (req, res) => {

    try {
        const foundProduct = await Product.findById(req.params.id)
        res.status(200).json(foundProduct)
            
    } catch(err) {
        res.status(500).json(err)
    }

}

export default { get: getProduct }