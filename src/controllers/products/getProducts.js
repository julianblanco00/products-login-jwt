import Product from '../../models/products'

const getProducts = async (req, res) => {

    try{
        const productsList = await Product.find();
        res.status(200).json(productsList)
        
    }catch(err){
        res.status(500).json(err)
    }
    
}

export default { getAll: getProducts }