const Transaction = require("../../models/transaction");

//para obtener todas las transacciones

const getTransactions = async ()=> {
    const transactions = await Transaction.find();
    return transactions;
};

const getTransactionsById = async (id) => {
    const getTrans = await Transaction.findById(id)
    if(!getTrans) throw Error(getTrans)

    return getTrans
}

const createTransaction = async(typeTransaction, auction, origin, price, quantity, weight, cowRoundUp)=> {
    const transaction = new Transaction({
        typeTransaction,
        auction,
        origin,
        price,
        quantity,
        weight,
        cowRoundUp  
    })
    await transaction.save();
    return transaction;

}

module.exports = {
    getTransactions,
    createTransaction,
    getTransactionsById
}