const Transaction = require("../models/transaction");

//para obtener todas las transacciones

const getTransactions = async ()=> {
    const transactions = await Transaction.find();
    return transactions;
};

const createTransaction = async(type, auction, origin, price, quantity, weight, cow_round_up)=> {
    const transaction = new Transaction({
        type,
        auction,
        origin,
        price,
        quantity,
        weight,
        cow_round_up  
    })
    await transaction.save();
    return transaction;

}

module.exports = {
    getTransactions,
    createTransaction
}