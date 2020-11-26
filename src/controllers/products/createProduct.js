import Product from '../../models/products'

const createProduct = async (req, res) => {
    
    const newProduct = new Product({
        ...req.body
    })

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
    
}

export default { create: createProduct }