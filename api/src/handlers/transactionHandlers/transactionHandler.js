const {
    getTransactions,
    getTransactionsById,
    createTransaction

} = require("../../controllers/transactionControllers/transactionController");

const getAllTrans = async (req, res) => {
    try {
        const transaction = await getTransactions();
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getById = async () => {
    const { id } = body.params
    try{
        const transaction = getTransactionsById(id)
        return res.status(200).json(transaction)
    } catch(error){
        return res.status(400).json({error: error.message})
    }
}

const postTransaction = async (req, res ) => {
    const { type, auction, origin, price, quantity, weight, cow_round_up} = req.body;
    try {
        const transaction = await createTransaction(type, auction, origin, price, quantity, weight, cow_round_up);
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAllTrans,
    getById,
    postTransaction
}