import Product from '../../models/products'

const deleteProduct = async (req, res) => {
    
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json()
        
    }catch(err){
        res.status(500).json(err)
    }
}

export default { delete: deleteProduct }