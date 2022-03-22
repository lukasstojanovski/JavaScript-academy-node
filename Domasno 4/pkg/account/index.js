const mongoose = require("mongoose"); 

const Account = mongoose.model(
    "accounts",
    {
        email: String,
        password: String,
        full_name: String
    },
    "accounts"
);

const create = async (acc) => {
    let a = new Account(acc);
    return await a.save();
};

const getById = async (id) => {
    return await Account.findById({_id: id});
}

const getByEmail = async (email) => {
    return await Account.findOne({ email });
}
const getAll = async () => {
    return await Account.find({ });
}
const update = async (email) => {
    return await Account.findByIdAndUpdate({_id: id }, acc);
}
const remove = async (id, acc) => {
    return await Account.remove({ _id: id }, acc);
}

module.exports = {
    create,
    getByEmail,
    getAll,
    update,
    remove,
    getById
}